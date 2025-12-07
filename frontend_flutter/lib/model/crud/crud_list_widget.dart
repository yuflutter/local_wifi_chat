import 'dart:async';
import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';

import '../../view/core/error_widgets.dart';
import 'abstract_crud_model.dart';

/// A list widget, that implements CRUD
class CrudListWidget<T, Tnew> extends StatefulWidget {
  final AbstractCrudModel<T, Tnew, AbstractFetchFilter> model;
  final Widget Function(BuildContext, T) listTileBuilder;
  final Future<void> Function(BuildContext)? addNewDialog;

  const CrudListWidget({super.key, required this.model, required this.listTileBuilder, this.addNewDialog});

  @override
  State<CrudListWidget<T, Tnew>> createState() => _CrudListWidgetState<T, Tnew>();
}

class _CrudListWidgetState<T, Tnew> extends State<CrudListWidget<T, Tnew>> {
  final _scrollController = ScrollController();

  void refresh() => setState(() {});

  @override
  void initState() {
    final model = widget.model;
    model.addListener(refresh);
    model.fetchFirst();

    _scrollController.addListener(() {
      if (_scrollController.position.pixels >= _scrollController.position.maxScrollExtent * 0.8 &&
          !model.isLoading &&
          model.hasMore) {
        model.fetchNext();
      }
    });
    super.initState();
  }

  @override
  void dispose() {
    widget.model.removeListener(refresh);
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final model = widget.model;
    final list = model.displayed;
    if (model.isFetchError) {
      WidgetsBinding.instance.addPostFrameCallback(
        (_) => showErrorLogPopup(
          context,
          error: log.error('Error loading the list', model.fetchError!, model.fetchErrorStack),
        ),
      );
    }
    if (model.scrollToTop) {
      WidgetsBinding.instance.addPostFrameCallback((_) => _scrollController.jumpTo(0));
    }

    if (model.scrollToBottom) {
      throw UnimplementedError();
    }

    return Stack(
      children: [
        Container(
          child: (list.isEmpty && model.isLoading)
              ? const Center(child: CircularProgressIndicator())
              : (list.isEmpty)
              ? const Center(child: Text('Nothing here'))
              : ListView.builder(
                  controller: _scrollController,
                  itemCount: list.length + (model.hasMore ? 1 : 0),
                  reverse: true,
                  itemBuilder: (context, index) {
                    if (index == list.length) {
                      return const Padding(
                        padding: EdgeInsets.all(16.0),
                        child: Center(child: CircularProgressIndicator()),
                      );
                    }
                    final item = list[index];
                    return widget.listTileBuilder(context, item);
                  },
                ),
        ),
        if (widget.addNewDialog != null)
          Container(
            alignment: AlignmentGeometry.bottomRight,
            padding: EdgeInsets.fromLTRB(0, 0, 20, 10),
            child: FloatingActionButton(
              onPressed: () => widget.addNewDialog!(context),
              tooltip: 'Add new',
              child: Icon(Icons.add),
            ),
          ),
      ],
    );
  }
}
