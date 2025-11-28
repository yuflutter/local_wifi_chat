package devices

type DeviceInfo struct {
	IP       string `json:"ip"`
	MAC      string `json:"mac"`
	HostName string `json:"hostName,omitempty"`
}
