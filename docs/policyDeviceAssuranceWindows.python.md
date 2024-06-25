# `policyDeviceAssuranceWindows` Submodule <a name="`policyDeviceAssuranceWindows` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceWindows <a name="PolicyDeviceAssuranceWindows" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows okta_policy_device_assurance_windows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_windows

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  disk_encryption_type: typing.List[str] = None,
  os_version: str = None,
  screenlock_type: typing.List[str] = None,
  secure_hardware_present: typing.Union[bool, IResolvable] = None,
  third_party_signal_providers: typing.Union[bool, IResolvable] = None,
  tpsp_browser_version: str = None,
  tpsp_builtin_dns_client_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_chrome_remote_desktop_app_blocked: typing.Union[bool, IResolvable] = None,
  tpsp_crowd_strike_agent_id: str = None,
  tpsp_crowd_strike_customer_id: str = None,
  tpsp_device_enrollment_domain: str = None,
  tpsp_disk_encrypted: typing.Union[bool, IResolvable] = None,
  tpsp_key_trust_level: str = None,
  tpsp_os_firewall: typing.Union[bool, IResolvable] = None,
  tpsp_os_version: str = None,
  tpsp_password_proctection_warning_trigger: str = None,
  tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable] = None,
  tpsp_safe_browsing_protection_level: str = None,
  tpsp_screen_lock_secured: typing.Union[bool, IResolvable] = None,
  tpsp_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_site_isolation_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_third_party_blocking_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_windows_machine_domain: str = None,
  tpsp_windows_user_domain: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.osVersion">os_version</a></code> | <code>str</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.thirdPartySignalProviders">third_party_signal_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBrowserVersion">tpsp_browser_version</a></code> | <code>str</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBuiltinDnsClientEnabled">tpsp_builtin_dns_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked">tpsp_chrome_remote_desktop_app_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeAgentId">tpsp_crowd_strike_agent_id</a></code> | <code>str</code> | Third party signal provider crowdstrike agent id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeCustomerId">tpsp_crowd_strike_customer_id</a></code> | <code>str</code> | Third party signal provider crowdstrike user id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDeviceEnrollmentDomain">tpsp_device_enrollment_domain</a></code> | <code>str</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDiskEncrypted">tpsp_disk_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspKeyTrustLevel">tpsp_key_trust_level</a></code> | <code>str</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsFirewall">tpsp_os_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsVersion">tpsp_os_version</a></code> | <code>str</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspPasswordProctectionWarningTrigger">tpsp_password_proctection_warning_trigger</a></code> | <code>str</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspRealtimeUrlCheckMode">tpsp_realtime_url_check_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSafeBrowsingProtectionLevel">tpsp_safe_browsing_protection_level</a></code> | <code>str</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspScreenLockSecured">tpsp_screen_lock_secured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSecureBootEnabled">tpsp_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider secure boot enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSiteIsolationEnabled">tpsp_site_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider site isolation enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspThirdPartyBlockingEnabled">tpsp_third_party_blocking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider third party blocking enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsMachineDomain">tpsp_windows_machine_domain</a></code> | <code>str</code> | Third party signal provider windows machine domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsUserDomain">tpsp_windows_user_domain</a></code> | <code>str</code> | Third party signal provider windows user domain. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.name"></a>

- *Type:* str

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}

---

##### `disk_encryption_type`<sup>Optional</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.diskEncryptionType"></a>

- *Type:* typing.List[str]

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}

---

##### `os_version`<sup>Optional</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.osVersion"></a>

- *Type:* str

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}

---

##### `screenlock_type`<sup>Optional</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.screenlockType"></a>

- *Type:* typing.List[str]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}

---

##### `secure_hardware_present`<sup>Optional</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.secureHardwarePresent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}

---

##### `third_party_signal_providers`<sup>Optional</sup> <a name="third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.thirdPartySignalProviders"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}

---

##### `tpsp_browser_version`<sup>Optional</sup> <a name="tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBrowserVersion"></a>

- *Type:* str

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}

---

##### `tpsp_builtin_dns_client_enabled`<sup>Optional</sup> <a name="tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBuiltinDnsClientEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}

---

##### `tpsp_chrome_remote_desktop_app_blocked`<sup>Optional</sup> <a name="tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpsp_crowd_strike_agent_id`<sup>Optional</sup> <a name="tpsp_crowd_strike_agent_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeAgentId"></a>

- *Type:* str

Third party signal provider crowdstrike agent id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}

---

##### `tpsp_crowd_strike_customer_id`<sup>Optional</sup> <a name="tpsp_crowd_strike_customer_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeCustomerId"></a>

- *Type:* str

Third party signal provider crowdstrike user id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}

---

##### `tpsp_device_enrollment_domain`<sup>Optional</sup> <a name="tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDeviceEnrollmentDomain"></a>

- *Type:* str

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}

---

##### `tpsp_disk_encrypted`<sup>Optional</sup> <a name="tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDiskEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}

---

##### `tpsp_key_trust_level`<sup>Optional</sup> <a name="tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspKeyTrustLevel"></a>

- *Type:* str

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}

---

##### `tpsp_os_firewall`<sup>Optional</sup> <a name="tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsFirewall"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}

---

##### `tpsp_os_version`<sup>Optional</sup> <a name="tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsVersion"></a>

- *Type:* str

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}

---

##### `tpsp_password_proctection_warning_trigger`<sup>Optional</sup> <a name="tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspPasswordProctectionWarningTrigger"></a>

- *Type:* str

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}

---

##### `tpsp_realtime_url_check_mode`<sup>Optional</sup> <a name="tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspRealtimeUrlCheckMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}

---

##### `tpsp_safe_browsing_protection_level`<sup>Optional</sup> <a name="tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSafeBrowsingProtectionLevel"></a>

- *Type:* str

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}

---

##### `tpsp_screen_lock_secured`<sup>Optional</sup> <a name="tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspScreenLockSecured"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}

---

##### `tpsp_secure_boot_enabled`<sup>Optional</sup> <a name="tpsp_secure_boot_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSecureBootEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider secure boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}

---

##### `tpsp_site_isolation_enabled`<sup>Optional</sup> <a name="tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSiteIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}

---

##### `tpsp_third_party_blocking_enabled`<sup>Optional</sup> <a name="tpsp_third_party_blocking_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspThirdPartyBlockingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider third party blocking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}

---

##### `tpsp_windows_machine_domain`<sup>Optional</sup> <a name="tpsp_windows_machine_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsMachineDomain"></a>

- *Type:* str

Third party signal provider windows machine domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}

---

##### `tpsp_windows_user_domain`<sup>Optional</sup> <a name="tpsp_windows_user_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsUserDomain"></a>

- *Type:* str

Third party signal provider windows user domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType">reset_disk_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion">reset_os_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType">reset_screenlock_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent">reset_secure_hardware_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders">reset_third_party_signal_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion">reset_tpsp_browser_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled">reset_tpsp_builtin_dns_client_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked">reset_tpsp_chrome_remote_desktop_app_blocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId">reset_tpsp_crowd_strike_agent_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId">reset_tpsp_crowd_strike_customer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain">reset_tpsp_device_enrollment_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted">reset_tpsp_disk_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel">reset_tpsp_key_trust_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall">reset_tpsp_os_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion">reset_tpsp_os_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger">reset_tpsp_password_proctection_warning_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode">reset_tpsp_realtime_url_check_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel">reset_tpsp_safe_browsing_protection_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured">reset_tpsp_screen_lock_secured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled">reset_tpsp_secure_boot_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled">reset_tpsp_site_isolation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled">reset_tpsp_third_party_blocking_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain">reset_tpsp_windows_machine_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain">reset_tpsp_windows_user_domain</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_disk_encryption_type` <a name="reset_disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType"></a>

```python
def reset_disk_encryption_type() -> None
```

##### `reset_os_version` <a name="reset_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion"></a>

```python
def reset_os_version() -> None
```

##### `reset_screenlock_type` <a name="reset_screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType"></a>

```python
def reset_screenlock_type() -> None
```

##### `reset_secure_hardware_present` <a name="reset_secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent"></a>

```python
def reset_secure_hardware_present() -> None
```

##### `reset_third_party_signal_providers` <a name="reset_third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders"></a>

```python
def reset_third_party_signal_providers() -> None
```

##### `reset_tpsp_browser_version` <a name="reset_tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion"></a>

```python
def reset_tpsp_browser_version() -> None
```

##### `reset_tpsp_builtin_dns_client_enabled` <a name="reset_tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled"></a>

```python
def reset_tpsp_builtin_dns_client_enabled() -> None
```

##### `reset_tpsp_chrome_remote_desktop_app_blocked` <a name="reset_tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked"></a>

```python
def reset_tpsp_chrome_remote_desktop_app_blocked() -> None
```

##### `reset_tpsp_crowd_strike_agent_id` <a name="reset_tpsp_crowd_strike_agent_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId"></a>

```python
def reset_tpsp_crowd_strike_agent_id() -> None
```

##### `reset_tpsp_crowd_strike_customer_id` <a name="reset_tpsp_crowd_strike_customer_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId"></a>

```python
def reset_tpsp_crowd_strike_customer_id() -> None
```

##### `reset_tpsp_device_enrollment_domain` <a name="reset_tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain"></a>

```python
def reset_tpsp_device_enrollment_domain() -> None
```

##### `reset_tpsp_disk_encrypted` <a name="reset_tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted"></a>

```python
def reset_tpsp_disk_encrypted() -> None
```

##### `reset_tpsp_key_trust_level` <a name="reset_tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel"></a>

```python
def reset_tpsp_key_trust_level() -> None
```

##### `reset_tpsp_os_firewall` <a name="reset_tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall"></a>

```python
def reset_tpsp_os_firewall() -> None
```

##### `reset_tpsp_os_version` <a name="reset_tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion"></a>

```python
def reset_tpsp_os_version() -> None
```

##### `reset_tpsp_password_proctection_warning_trigger` <a name="reset_tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger"></a>

```python
def reset_tpsp_password_proctection_warning_trigger() -> None
```

##### `reset_tpsp_realtime_url_check_mode` <a name="reset_tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode"></a>

```python
def reset_tpsp_realtime_url_check_mode() -> None
```

##### `reset_tpsp_safe_browsing_protection_level` <a name="reset_tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel"></a>

```python
def reset_tpsp_safe_browsing_protection_level() -> None
```

##### `reset_tpsp_screen_lock_secured` <a name="reset_tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured"></a>

```python
def reset_tpsp_screen_lock_secured() -> None
```

##### `reset_tpsp_secure_boot_enabled` <a name="reset_tpsp_secure_boot_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled"></a>

```python
def reset_tpsp_secure_boot_enabled() -> None
```

##### `reset_tpsp_site_isolation_enabled` <a name="reset_tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled"></a>

```python
def reset_tpsp_site_isolation_enabled() -> None
```

##### `reset_tpsp_third_party_blocking_enabled` <a name="reset_tpsp_third_party_blocking_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled"></a>

```python
def reset_tpsp_third_party_blocking_enabled() -> None
```

##### `reset_tpsp_windows_machine_domain` <a name="reset_tpsp_windows_machine_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain"></a>

```python
def reset_tpsp_windows_machine_domain() -> None
```

##### `reset_tpsp_windows_user_domain` <a name="reset_tpsp_windows_user_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain"></a>

```python
def reset_tpsp_windows_user_domain() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_windows

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_windows

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_windows

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_windows

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyDeviceAssuranceWindows to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyDeviceAssuranceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate">last_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput">disk_encryption_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput">os_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput">screenlock_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput">secure_hardware_present_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput">third_party_signal_providers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput">tpsp_browser_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput">tpsp_builtin_dns_client_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput">tpsp_chrome_remote_desktop_app_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput">tpsp_crowd_strike_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput">tpsp_crowd_strike_customer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput">tpsp_device_enrollment_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput">tpsp_disk_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput">tpsp_key_trust_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput">tpsp_os_firewall_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput">tpsp_os_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput">tpsp_password_proctection_warning_trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput">tpsp_realtime_url_check_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput">tpsp_safe_browsing_protection_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput">tpsp_screen_lock_secured_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput">tpsp_secure_boot_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput">tpsp_site_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput">tpsp_third_party_blocking_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput">tpsp_windows_machine_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput">tpsp_windows_user_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders">third_party_signal_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion">tpsp_browser_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled">tpsp_builtin_dns_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked">tpsp_chrome_remote_desktop_app_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId">tpsp_crowd_strike_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId">tpsp_crowd_strike_customer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain">tpsp_device_enrollment_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted">tpsp_disk_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel">tpsp_key_trust_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall">tpsp_os_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion">tpsp_os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger">tpsp_password_proctection_warning_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode">tpsp_realtime_url_check_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel">tpsp_safe_browsing_protection_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured">tpsp_screen_lock_secured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled">tpsp_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled">tpsp_site_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled">tpsp_third_party_blocking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain">tpsp_windows_machine_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain">tpsp_windows_user_domain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update`<sup>Required</sup> <a name="last_update" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate"></a>

```python
last_update: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `disk_encryption_type_input`<sup>Optional</sup> <a name="disk_encryption_type_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput"></a>

```python
disk_encryption_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_version_input`<sup>Optional</sup> <a name="os_version_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput"></a>

```python
os_version_input: str
```

- *Type:* str

---

##### `screenlock_type_input`<sup>Optional</sup> <a name="screenlock_type_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput"></a>

```python
screenlock_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure_hardware_present_input`<sup>Optional</sup> <a name="secure_hardware_present_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput"></a>

```python
secure_hardware_present_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `third_party_signal_providers_input`<sup>Optional</sup> <a name="third_party_signal_providers_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput"></a>

```python
third_party_signal_providers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_browser_version_input`<sup>Optional</sup> <a name="tpsp_browser_version_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput"></a>

```python
tpsp_browser_version_input: str
```

- *Type:* str

---

##### `tpsp_builtin_dns_client_enabled_input`<sup>Optional</sup> <a name="tpsp_builtin_dns_client_enabled_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput"></a>

```python
tpsp_builtin_dns_client_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_chrome_remote_desktop_app_blocked_input`<sup>Optional</sup> <a name="tpsp_chrome_remote_desktop_app_blocked_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```python
tpsp_chrome_remote_desktop_app_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_crowd_strike_agent_id_input`<sup>Optional</sup> <a name="tpsp_crowd_strike_agent_id_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput"></a>

```python
tpsp_crowd_strike_agent_id_input: str
```

- *Type:* str

---

##### `tpsp_crowd_strike_customer_id_input`<sup>Optional</sup> <a name="tpsp_crowd_strike_customer_id_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput"></a>

```python
tpsp_crowd_strike_customer_id_input: str
```

- *Type:* str

---

##### `tpsp_device_enrollment_domain_input`<sup>Optional</sup> <a name="tpsp_device_enrollment_domain_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput"></a>

```python
tpsp_device_enrollment_domain_input: str
```

- *Type:* str

---

##### `tpsp_disk_encrypted_input`<sup>Optional</sup> <a name="tpsp_disk_encrypted_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput"></a>

```python
tpsp_disk_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_key_trust_level_input`<sup>Optional</sup> <a name="tpsp_key_trust_level_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput"></a>

```python
tpsp_key_trust_level_input: str
```

- *Type:* str

---

##### `tpsp_os_firewall_input`<sup>Optional</sup> <a name="tpsp_os_firewall_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput"></a>

```python
tpsp_os_firewall_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_os_version_input`<sup>Optional</sup> <a name="tpsp_os_version_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput"></a>

```python
tpsp_os_version_input: str
```

- *Type:* str

---

##### `tpsp_password_proctection_warning_trigger_input`<sup>Optional</sup> <a name="tpsp_password_proctection_warning_trigger_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput"></a>

```python
tpsp_password_proctection_warning_trigger_input: str
```

- *Type:* str

---

##### `tpsp_realtime_url_check_mode_input`<sup>Optional</sup> <a name="tpsp_realtime_url_check_mode_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput"></a>

```python
tpsp_realtime_url_check_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_safe_browsing_protection_level_input`<sup>Optional</sup> <a name="tpsp_safe_browsing_protection_level_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput"></a>

```python
tpsp_safe_browsing_protection_level_input: str
```

- *Type:* str

---

##### `tpsp_screen_lock_secured_input`<sup>Optional</sup> <a name="tpsp_screen_lock_secured_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput"></a>

```python
tpsp_screen_lock_secured_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_secure_boot_enabled_input`<sup>Optional</sup> <a name="tpsp_secure_boot_enabled_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput"></a>

```python
tpsp_secure_boot_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_site_isolation_enabled_input`<sup>Optional</sup> <a name="tpsp_site_isolation_enabled_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput"></a>

```python
tpsp_site_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_third_party_blocking_enabled_input`<sup>Optional</sup> <a name="tpsp_third_party_blocking_enabled_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput"></a>

```python
tpsp_third_party_blocking_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_windows_machine_domain_input`<sup>Optional</sup> <a name="tpsp_windows_machine_domain_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput"></a>

```python
tpsp_windows_machine_domain_input: str
```

- *Type:* str

---

##### `tpsp_windows_user_domain_input`<sup>Optional</sup> <a name="tpsp_windows_user_domain_input" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput"></a>

```python
tpsp_windows_user_domain_input: str
```

- *Type:* str

---

##### `disk_encryption_type`<sup>Required</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType"></a>

```python
disk_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `screenlock_type`<sup>Required</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType"></a>

```python
screenlock_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure_hardware_present`<sup>Required</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent"></a>

```python
secure_hardware_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `third_party_signal_providers`<sup>Required</sup> <a name="third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders"></a>

```python
third_party_signal_providers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_browser_version`<sup>Required</sup> <a name="tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion"></a>

```python
tpsp_browser_version: str
```

- *Type:* str

---

##### `tpsp_builtin_dns_client_enabled`<sup>Required</sup> <a name="tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled"></a>

```python
tpsp_builtin_dns_client_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_chrome_remote_desktop_app_blocked`<sup>Required</sup> <a name="tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked"></a>

```python
tpsp_chrome_remote_desktop_app_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_crowd_strike_agent_id`<sup>Required</sup> <a name="tpsp_crowd_strike_agent_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId"></a>

```python
tpsp_crowd_strike_agent_id: str
```

- *Type:* str

---

##### `tpsp_crowd_strike_customer_id`<sup>Required</sup> <a name="tpsp_crowd_strike_customer_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId"></a>

```python
tpsp_crowd_strike_customer_id: str
```

- *Type:* str

---

##### `tpsp_device_enrollment_domain`<sup>Required</sup> <a name="tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain"></a>

```python
tpsp_device_enrollment_domain: str
```

- *Type:* str

---

##### `tpsp_disk_encrypted`<sup>Required</sup> <a name="tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted"></a>

```python
tpsp_disk_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_key_trust_level`<sup>Required</sup> <a name="tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel"></a>

```python
tpsp_key_trust_level: str
```

- *Type:* str

---

##### `tpsp_os_firewall`<sup>Required</sup> <a name="tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall"></a>

```python
tpsp_os_firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_os_version`<sup>Required</sup> <a name="tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion"></a>

```python
tpsp_os_version: str
```

- *Type:* str

---

##### `tpsp_password_proctection_warning_trigger`<sup>Required</sup> <a name="tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger"></a>

```python
tpsp_password_proctection_warning_trigger: str
```

- *Type:* str

---

##### `tpsp_realtime_url_check_mode`<sup>Required</sup> <a name="tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode"></a>

```python
tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_safe_browsing_protection_level`<sup>Required</sup> <a name="tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel"></a>

```python
tpsp_safe_browsing_protection_level: str
```

- *Type:* str

---

##### `tpsp_screen_lock_secured`<sup>Required</sup> <a name="tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured"></a>

```python
tpsp_screen_lock_secured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_secure_boot_enabled`<sup>Required</sup> <a name="tpsp_secure_boot_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled"></a>

```python
tpsp_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_site_isolation_enabled`<sup>Required</sup> <a name="tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled"></a>

```python
tpsp_site_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_third_party_blocking_enabled`<sup>Required</sup> <a name="tpsp_third_party_blocking_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled"></a>

```python
tpsp_third_party_blocking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_windows_machine_domain`<sup>Required</sup> <a name="tpsp_windows_machine_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain"></a>

```python
tpsp_windows_machine_domain: str
```

- *Type:* str

---

##### `tpsp_windows_user_domain`<sup>Required</sup> <a name="tpsp_windows_user_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain"></a>

```python
tpsp_windows_user_domain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceWindowsConfig <a name="PolicyDeviceAssuranceWindowsConfig" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_windows

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  disk_encryption_type: typing.List[str] = None,
  os_version: str = None,
  screenlock_type: typing.List[str] = None,
  secure_hardware_present: typing.Union[bool, IResolvable] = None,
  third_party_signal_providers: typing.Union[bool, IResolvable] = None,
  tpsp_browser_version: str = None,
  tpsp_builtin_dns_client_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_chrome_remote_desktop_app_blocked: typing.Union[bool, IResolvable] = None,
  tpsp_crowd_strike_agent_id: str = None,
  tpsp_crowd_strike_customer_id: str = None,
  tpsp_device_enrollment_domain: str = None,
  tpsp_disk_encrypted: typing.Union[bool, IResolvable] = None,
  tpsp_key_trust_level: str = None,
  tpsp_os_firewall: typing.Union[bool, IResolvable] = None,
  tpsp_os_version: str = None,
  tpsp_password_proctection_warning_trigger: str = None,
  tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable] = None,
  tpsp_safe_browsing_protection_level: str = None,
  tpsp_screen_lock_secured: typing.Union[bool, IResolvable] = None,
  tpsp_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_site_isolation_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_third_party_blocking_enabled: typing.Union[bool, IResolvable] = None,
  tpsp_windows_machine_domain: str = None,
  tpsp_windows_user_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name">name</a></code> | <code>str</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion">os_version</a></code> | <code>str</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders">third_party_signal_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion">tpsp_browser_version</a></code> | <code>str</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled">tpsp_builtin_dns_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked">tpsp_chrome_remote_desktop_app_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId">tpsp_crowd_strike_agent_id</a></code> | <code>str</code> | Third party signal provider crowdstrike agent id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId">tpsp_crowd_strike_customer_id</a></code> | <code>str</code> | Third party signal provider crowdstrike user id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain">tpsp_device_enrollment_domain</a></code> | <code>str</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted">tpsp_disk_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel">tpsp_key_trust_level</a></code> | <code>str</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall">tpsp_os_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion">tpsp_os_version</a></code> | <code>str</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger">tpsp_password_proctection_warning_trigger</a></code> | <code>str</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode">tpsp_realtime_url_check_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel">tpsp_safe_browsing_protection_level</a></code> | <code>str</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured">tpsp_screen_lock_secured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled">tpsp_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider secure boot enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled">tpsp_site_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider site isolation enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled">tpsp_third_party_blocking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider third party blocking enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain">tpsp_windows_machine_domain</a></code> | <code>str</code> | Third party signal provider windows machine domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain">tpsp_windows_user_domain</a></code> | <code>str</code> | Third party signal provider windows user domain. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}

---

##### `disk_encryption_type`<sup>Optional</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType"></a>

```python
disk_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}

---

##### `os_version`<sup>Optional</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}

---

##### `screenlock_type`<sup>Optional</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType"></a>

```python
screenlock_type: typing.List[str]
```

- *Type:* typing.List[str]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}

---

##### `secure_hardware_present`<sup>Optional</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent"></a>

```python
secure_hardware_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}

---

##### `third_party_signal_providers`<sup>Optional</sup> <a name="third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders"></a>

```python
third_party_signal_providers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}

---

##### `tpsp_browser_version`<sup>Optional</sup> <a name="tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion"></a>

```python
tpsp_browser_version: str
```

- *Type:* str

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}

---

##### `tpsp_builtin_dns_client_enabled`<sup>Optional</sup> <a name="tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled"></a>

```python
tpsp_builtin_dns_client_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}

---

##### `tpsp_chrome_remote_desktop_app_blocked`<sup>Optional</sup> <a name="tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```python
tpsp_chrome_remote_desktop_app_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpsp_crowd_strike_agent_id`<sup>Optional</sup> <a name="tpsp_crowd_strike_agent_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId"></a>

```python
tpsp_crowd_strike_agent_id: str
```

- *Type:* str

Third party signal provider crowdstrike agent id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}

---

##### `tpsp_crowd_strike_customer_id`<sup>Optional</sup> <a name="tpsp_crowd_strike_customer_id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId"></a>

```python
tpsp_crowd_strike_customer_id: str
```

- *Type:* str

Third party signal provider crowdstrike user id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}

---

##### `tpsp_device_enrollment_domain`<sup>Optional</sup> <a name="tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain"></a>

```python
tpsp_device_enrollment_domain: str
```

- *Type:* str

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}

---

##### `tpsp_disk_encrypted`<sup>Optional</sup> <a name="tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted"></a>

```python
tpsp_disk_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}

---

##### `tpsp_key_trust_level`<sup>Optional</sup> <a name="tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel"></a>

```python
tpsp_key_trust_level: str
```

- *Type:* str

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}

---

##### `tpsp_os_firewall`<sup>Optional</sup> <a name="tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall"></a>

```python
tpsp_os_firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}

---

##### `tpsp_os_version`<sup>Optional</sup> <a name="tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion"></a>

```python
tpsp_os_version: str
```

- *Type:* str

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}

---

##### `tpsp_password_proctection_warning_trigger`<sup>Optional</sup> <a name="tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```python
tpsp_password_proctection_warning_trigger: str
```

- *Type:* str

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}

---

##### `tpsp_realtime_url_check_mode`<sup>Optional</sup> <a name="tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode"></a>

```python
tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}

---

##### `tpsp_safe_browsing_protection_level`<sup>Optional</sup> <a name="tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```python
tpsp_safe_browsing_protection_level: str
```

- *Type:* str

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}

---

##### `tpsp_screen_lock_secured`<sup>Optional</sup> <a name="tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured"></a>

```python
tpsp_screen_lock_secured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}

---

##### `tpsp_secure_boot_enabled`<sup>Optional</sup> <a name="tpsp_secure_boot_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled"></a>

```python
tpsp_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider secure boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}

---

##### `tpsp_site_isolation_enabled`<sup>Optional</sup> <a name="tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled"></a>

```python
tpsp_site_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}

---

##### `tpsp_third_party_blocking_enabled`<sup>Optional</sup> <a name="tpsp_third_party_blocking_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled"></a>

```python
tpsp_third_party_blocking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider third party blocking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}

---

##### `tpsp_windows_machine_domain`<sup>Optional</sup> <a name="tpsp_windows_machine_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain"></a>

```python
tpsp_windows_machine_domain: str
```

- *Type:* str

Third party signal provider windows machine domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}

---

##### `tpsp_windows_user_domain`<sup>Optional</sup> <a name="tpsp_windows_user_domain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain"></a>

```python
tpsp_windows_user_domain: str
```

- *Type:* str

Third party signal provider windows user domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}

---



