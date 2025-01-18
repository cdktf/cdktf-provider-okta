# `policyDeviceAssuranceMacos` Submodule <a name="`policyDeviceAssuranceMacos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceMacos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceMacos <a name="PolicyDeviceAssuranceMacos" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos okta_policy_device_assurance_macos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_macos

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos(
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
  tpsp_device_enrollment_domain: str = None,
  tpsp_disk_encrypted: typing.Union[bool, IResolvable] = None,
  tpsp_key_trust_level: str = None,
  tpsp_os_firewall: typing.Union[bool, IResolvable] = None,
  tpsp_os_version: str = None,
  tpsp_password_proctection_warning_trigger: str = None,
  tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable] = None,
  tpsp_safe_browsing_protection_level: str = None,
  tpsp_screen_lock_secured: typing.Union[bool, IResolvable] = None,
  tpsp_site_isolation_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.osVersion">os_version</a></code> | <code>str</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.thirdPartySignalProviders">third_party_signal_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBrowserVersion">tpsp_browser_version</a></code> | <code>str</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBuiltinDnsClientEnabled">tpsp_builtin_dns_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked">tpsp_chrome_remote_desktop_app_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDeviceEnrollmentDomain">tpsp_device_enrollment_domain</a></code> | <code>str</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDiskEncrypted">tpsp_disk_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspKeyTrustLevel">tpsp_key_trust_level</a></code> | <code>str</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsFirewall">tpsp_os_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsVersion">tpsp_os_version</a></code> | <code>str</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspPasswordProctectionWarningTrigger">tpsp_password_proctection_warning_trigger</a></code> | <code>str</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspRealtimeUrlCheckMode">tpsp_realtime_url_check_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSafeBrowsingProtectionLevel">tpsp_safe_browsing_protection_level</a></code> | <code>str</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspScreenLockSecured">tpsp_screen_lock_secured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSiteIsolationEnabled">tpsp_site_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider site isolation enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.name"></a>

- *Type:* str

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#name PolicyDeviceAssuranceMacos#name}

---

##### `disk_encryption_type`<sup>Optional</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.diskEncryptionType"></a>

- *Type:* typing.List[str]

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#disk_encryption_type PolicyDeviceAssuranceMacos#disk_encryption_type}

---

##### `os_version`<sup>Optional</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.osVersion"></a>

- *Type:* str

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#os_version PolicyDeviceAssuranceMacos#os_version}

---

##### `screenlock_type`<sup>Optional</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.screenlockType"></a>

- *Type:* typing.List[str]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#screenlock_type PolicyDeviceAssuranceMacos#screenlock_type}

---

##### `secure_hardware_present`<sup>Optional</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.secureHardwarePresent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#secure_hardware_present PolicyDeviceAssuranceMacos#secure_hardware_present}

---

##### `third_party_signal_providers`<sup>Optional</sup> <a name="third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.thirdPartySignalProviders"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#third_party_signal_providers PolicyDeviceAssuranceMacos#third_party_signal_providers}

---

##### `tpsp_browser_version`<sup>Optional</sup> <a name="tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBrowserVersion"></a>

- *Type:* str

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_browser_version PolicyDeviceAssuranceMacos#tpsp_browser_version}

---

##### `tpsp_builtin_dns_client_enabled`<sup>Optional</sup> <a name="tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBuiltinDnsClientEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceMacos#tpsp_builtin_dns_client_enabled}

---

##### `tpsp_chrome_remote_desktop_app_blocked`<sup>Optional</sup> <a name="tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceMacos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpsp_device_enrollment_domain`<sup>Optional</sup> <a name="tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDeviceEnrollmentDomain"></a>

- *Type:* str

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_device_enrollment_domain PolicyDeviceAssuranceMacos#tpsp_device_enrollment_domain}

---

##### `tpsp_disk_encrypted`<sup>Optional</sup> <a name="tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDiskEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_disk_encrypted PolicyDeviceAssuranceMacos#tpsp_disk_encrypted}

---

##### `tpsp_key_trust_level`<sup>Optional</sup> <a name="tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspKeyTrustLevel"></a>

- *Type:* str

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_key_trust_level PolicyDeviceAssuranceMacos#tpsp_key_trust_level}

---

##### `tpsp_os_firewall`<sup>Optional</sup> <a name="tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsFirewall"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_os_firewall PolicyDeviceAssuranceMacos#tpsp_os_firewall}

---

##### `tpsp_os_version`<sup>Optional</sup> <a name="tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsVersion"></a>

- *Type:* str

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_os_version PolicyDeviceAssuranceMacos#tpsp_os_version}

---

##### `tpsp_password_proctection_warning_trigger`<sup>Optional</sup> <a name="tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspPasswordProctectionWarningTrigger"></a>

- *Type:* str

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceMacos#tpsp_password_proctection_warning_trigger}

---

##### `tpsp_realtime_url_check_mode`<sup>Optional</sup> <a name="tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspRealtimeUrlCheckMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceMacos#tpsp_realtime_url_check_mode}

---

##### `tpsp_safe_browsing_protection_level`<sup>Optional</sup> <a name="tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSafeBrowsingProtectionLevel"></a>

- *Type:* str

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceMacos#tpsp_safe_browsing_protection_level}

---

##### `tpsp_screen_lock_secured`<sup>Optional</sup> <a name="tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspScreenLockSecured"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_screen_lock_secured PolicyDeviceAssuranceMacos#tpsp_screen_lock_secured}

---

##### `tpsp_site_isolation_enabled`<sup>Optional</sup> <a name="tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSiteIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_site_isolation_enabled PolicyDeviceAssuranceMacos#tpsp_site_isolation_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType">reset_disk_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion">reset_os_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType">reset_screenlock_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent">reset_secure_hardware_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders">reset_third_party_signal_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion">reset_tpsp_browser_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled">reset_tpsp_builtin_dns_client_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked">reset_tpsp_chrome_remote_desktop_app_blocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain">reset_tpsp_device_enrollment_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted">reset_tpsp_disk_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel">reset_tpsp_key_trust_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall">reset_tpsp_os_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion">reset_tpsp_os_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger">reset_tpsp_password_proctection_warning_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode">reset_tpsp_realtime_url_check_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel">reset_tpsp_safe_browsing_protection_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured">reset_tpsp_screen_lock_secured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled">reset_tpsp_site_isolation_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_disk_encryption_type` <a name="reset_disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType"></a>

```python
def reset_disk_encryption_type() -> None
```

##### `reset_os_version` <a name="reset_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion"></a>

```python
def reset_os_version() -> None
```

##### `reset_screenlock_type` <a name="reset_screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType"></a>

```python
def reset_screenlock_type() -> None
```

##### `reset_secure_hardware_present` <a name="reset_secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent"></a>

```python
def reset_secure_hardware_present() -> None
```

##### `reset_third_party_signal_providers` <a name="reset_third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders"></a>

```python
def reset_third_party_signal_providers() -> None
```

##### `reset_tpsp_browser_version` <a name="reset_tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion"></a>

```python
def reset_tpsp_browser_version() -> None
```

##### `reset_tpsp_builtin_dns_client_enabled` <a name="reset_tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled"></a>

```python
def reset_tpsp_builtin_dns_client_enabled() -> None
```

##### `reset_tpsp_chrome_remote_desktop_app_blocked` <a name="reset_tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```python
def reset_tpsp_chrome_remote_desktop_app_blocked() -> None
```

##### `reset_tpsp_device_enrollment_domain` <a name="reset_tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain"></a>

```python
def reset_tpsp_device_enrollment_domain() -> None
```

##### `reset_tpsp_disk_encrypted` <a name="reset_tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted"></a>

```python
def reset_tpsp_disk_encrypted() -> None
```

##### `reset_tpsp_key_trust_level` <a name="reset_tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel"></a>

```python
def reset_tpsp_key_trust_level() -> None
```

##### `reset_tpsp_os_firewall` <a name="reset_tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall"></a>

```python
def reset_tpsp_os_firewall() -> None
```

##### `reset_tpsp_os_version` <a name="reset_tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion"></a>

```python
def reset_tpsp_os_version() -> None
```

##### `reset_tpsp_password_proctection_warning_trigger` <a name="reset_tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger"></a>

```python
def reset_tpsp_password_proctection_warning_trigger() -> None
```

##### `reset_tpsp_realtime_url_check_mode` <a name="reset_tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode"></a>

```python
def reset_tpsp_realtime_url_check_mode() -> None
```

##### `reset_tpsp_safe_browsing_protection_level` <a name="reset_tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel"></a>

```python
def reset_tpsp_safe_browsing_protection_level() -> None
```

##### `reset_tpsp_screen_lock_secured` <a name="reset_tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured"></a>

```python
def reset_tpsp_screen_lock_secured() -> None
```

##### `reset_tpsp_site_isolation_enabled` <a name="reset_tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled"></a>

```python
def reset_tpsp_site_isolation_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_macos

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_macos

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_macos

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_macos

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyDeviceAssuranceMacos to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyDeviceAssuranceMacos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceMacos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate">last_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput">disk_encryption_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput">os_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput">screenlock_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput">secure_hardware_present_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput">third_party_signal_providers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput">tpsp_browser_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput">tpsp_builtin_dns_client_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput">tpsp_chrome_remote_desktop_app_blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput">tpsp_device_enrollment_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput">tpsp_disk_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput">tpsp_key_trust_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput">tpsp_os_firewall_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput">tpsp_os_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput">tpsp_password_proctection_warning_trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput">tpsp_realtime_url_check_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput">tpsp_safe_browsing_protection_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput">tpsp_screen_lock_secured_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput">tpsp_site_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders">third_party_signal_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion">tpsp_browser_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled">tpsp_builtin_dns_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked">tpsp_chrome_remote_desktop_app_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain">tpsp_device_enrollment_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted">tpsp_disk_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel">tpsp_key_trust_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall">tpsp_os_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion">tpsp_os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger">tpsp_password_proctection_warning_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode">tpsp_realtime_url_check_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel">tpsp_safe_browsing_protection_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured">tpsp_screen_lock_secured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled">tpsp_site_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update`<sup>Required</sup> <a name="last_update" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate"></a>

```python
last_update: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `disk_encryption_type_input`<sup>Optional</sup> <a name="disk_encryption_type_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput"></a>

```python
disk_encryption_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_version_input`<sup>Optional</sup> <a name="os_version_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput"></a>

```python
os_version_input: str
```

- *Type:* str

---

##### `screenlock_type_input`<sup>Optional</sup> <a name="screenlock_type_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput"></a>

```python
screenlock_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure_hardware_present_input`<sup>Optional</sup> <a name="secure_hardware_present_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput"></a>

```python
secure_hardware_present_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `third_party_signal_providers_input`<sup>Optional</sup> <a name="third_party_signal_providers_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput"></a>

```python
third_party_signal_providers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_browser_version_input`<sup>Optional</sup> <a name="tpsp_browser_version_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput"></a>

```python
tpsp_browser_version_input: str
```

- *Type:* str

---

##### `tpsp_builtin_dns_client_enabled_input`<sup>Optional</sup> <a name="tpsp_builtin_dns_client_enabled_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput"></a>

```python
tpsp_builtin_dns_client_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_chrome_remote_desktop_app_blocked_input`<sup>Optional</sup> <a name="tpsp_chrome_remote_desktop_app_blocked_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```python
tpsp_chrome_remote_desktop_app_blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_device_enrollment_domain_input`<sup>Optional</sup> <a name="tpsp_device_enrollment_domain_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput"></a>

```python
tpsp_device_enrollment_domain_input: str
```

- *Type:* str

---

##### `tpsp_disk_encrypted_input`<sup>Optional</sup> <a name="tpsp_disk_encrypted_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput"></a>

```python
tpsp_disk_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_key_trust_level_input`<sup>Optional</sup> <a name="tpsp_key_trust_level_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput"></a>

```python
tpsp_key_trust_level_input: str
```

- *Type:* str

---

##### `tpsp_os_firewall_input`<sup>Optional</sup> <a name="tpsp_os_firewall_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput"></a>

```python
tpsp_os_firewall_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_os_version_input`<sup>Optional</sup> <a name="tpsp_os_version_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput"></a>

```python
tpsp_os_version_input: str
```

- *Type:* str

---

##### `tpsp_password_proctection_warning_trigger_input`<sup>Optional</sup> <a name="tpsp_password_proctection_warning_trigger_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```python
tpsp_password_proctection_warning_trigger_input: str
```

- *Type:* str

---

##### `tpsp_realtime_url_check_mode_input`<sup>Optional</sup> <a name="tpsp_realtime_url_check_mode_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput"></a>

```python
tpsp_realtime_url_check_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_safe_browsing_protection_level_input`<sup>Optional</sup> <a name="tpsp_safe_browsing_protection_level_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```python
tpsp_safe_browsing_protection_level_input: str
```

- *Type:* str

---

##### `tpsp_screen_lock_secured_input`<sup>Optional</sup> <a name="tpsp_screen_lock_secured_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput"></a>

```python
tpsp_screen_lock_secured_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_site_isolation_enabled_input`<sup>Optional</sup> <a name="tpsp_site_isolation_enabled_input" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput"></a>

```python
tpsp_site_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_encryption_type`<sup>Required</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType"></a>

```python
disk_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `screenlock_type`<sup>Required</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType"></a>

```python
screenlock_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure_hardware_present`<sup>Required</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent"></a>

```python
secure_hardware_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `third_party_signal_providers`<sup>Required</sup> <a name="third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders"></a>

```python
third_party_signal_providers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_browser_version`<sup>Required</sup> <a name="tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion"></a>

```python
tpsp_browser_version: str
```

- *Type:* str

---

##### `tpsp_builtin_dns_client_enabled`<sup>Required</sup> <a name="tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled"></a>

```python
tpsp_builtin_dns_client_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_chrome_remote_desktop_app_blocked`<sup>Required</sup> <a name="tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```python
tpsp_chrome_remote_desktop_app_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_device_enrollment_domain`<sup>Required</sup> <a name="tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain"></a>

```python
tpsp_device_enrollment_domain: str
```

- *Type:* str

---

##### `tpsp_disk_encrypted`<sup>Required</sup> <a name="tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted"></a>

```python
tpsp_disk_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_key_trust_level`<sup>Required</sup> <a name="tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel"></a>

```python
tpsp_key_trust_level: str
```

- *Type:* str

---

##### `tpsp_os_firewall`<sup>Required</sup> <a name="tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall"></a>

```python
tpsp_os_firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_os_version`<sup>Required</sup> <a name="tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion"></a>

```python
tpsp_os_version: str
```

- *Type:* str

---

##### `tpsp_password_proctection_warning_trigger`<sup>Required</sup> <a name="tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger"></a>

```python
tpsp_password_proctection_warning_trigger: str
```

- *Type:* str

---

##### `tpsp_realtime_url_check_mode`<sup>Required</sup> <a name="tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode"></a>

```python
tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_safe_browsing_protection_level`<sup>Required</sup> <a name="tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel"></a>

```python
tpsp_safe_browsing_protection_level: str
```

- *Type:* str

---

##### `tpsp_screen_lock_secured`<sup>Required</sup> <a name="tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured"></a>

```python
tpsp_screen_lock_secured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tpsp_site_isolation_enabled`<sup>Required</sup> <a name="tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled"></a>

```python
tpsp_site_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceMacosConfig <a name="PolicyDeviceAssuranceMacosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_macos

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig(
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
  tpsp_device_enrollment_domain: str = None,
  tpsp_disk_encrypted: typing.Union[bool, IResolvable] = None,
  tpsp_key_trust_level: str = None,
  tpsp_os_firewall: typing.Union[bool, IResolvable] = None,
  tpsp_os_version: str = None,
  tpsp_password_proctection_warning_trigger: str = None,
  tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable] = None,
  tpsp_safe_browsing_protection_level: str = None,
  tpsp_screen_lock_secured: typing.Union[bool, IResolvable] = None,
  tpsp_site_isolation_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name">name</a></code> | <code>str</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion">os_version</a></code> | <code>str</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders">third_party_signal_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion">tpsp_browser_version</a></code> | <code>str</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled">tpsp_builtin_dns_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked">tpsp_chrome_remote_desktop_app_blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain">tpsp_device_enrollment_domain</a></code> | <code>str</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted">tpsp_disk_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel">tpsp_key_trust_level</a></code> | <code>str</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall">tpsp_os_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion">tpsp_os_version</a></code> | <code>str</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger">tpsp_password_proctection_warning_trigger</a></code> | <code>str</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode">tpsp_realtime_url_check_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel">tpsp_safe_browsing_protection_level</a></code> | <code>str</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured">tpsp_screen_lock_secured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled">tpsp_site_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Third party signal provider site isolation enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#name PolicyDeviceAssuranceMacos#name}

---

##### `disk_encryption_type`<sup>Optional</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType"></a>

```python
disk_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#disk_encryption_type PolicyDeviceAssuranceMacos#disk_encryption_type}

---

##### `os_version`<sup>Optional</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#os_version PolicyDeviceAssuranceMacos#os_version}

---

##### `screenlock_type`<sup>Optional</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType"></a>

```python
screenlock_type: typing.List[str]
```

- *Type:* typing.List[str]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#screenlock_type PolicyDeviceAssuranceMacos#screenlock_type}

---

##### `secure_hardware_present`<sup>Optional</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent"></a>

```python
secure_hardware_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#secure_hardware_present PolicyDeviceAssuranceMacos#secure_hardware_present}

---

##### `third_party_signal_providers`<sup>Optional</sup> <a name="third_party_signal_providers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders"></a>

```python
third_party_signal_providers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#third_party_signal_providers PolicyDeviceAssuranceMacos#third_party_signal_providers}

---

##### `tpsp_browser_version`<sup>Optional</sup> <a name="tpsp_browser_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion"></a>

```python
tpsp_browser_version: str
```

- *Type:* str

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_browser_version PolicyDeviceAssuranceMacos#tpsp_browser_version}

---

##### `tpsp_builtin_dns_client_enabled`<sup>Optional</sup> <a name="tpsp_builtin_dns_client_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```python
tpsp_builtin_dns_client_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceMacos#tpsp_builtin_dns_client_enabled}

---

##### `tpsp_chrome_remote_desktop_app_blocked`<sup>Optional</sup> <a name="tpsp_chrome_remote_desktop_app_blocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```python
tpsp_chrome_remote_desktop_app_blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceMacos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpsp_device_enrollment_domain`<sup>Optional</sup> <a name="tpsp_device_enrollment_domain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain"></a>

```python
tpsp_device_enrollment_domain: str
```

- *Type:* str

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_device_enrollment_domain PolicyDeviceAssuranceMacos#tpsp_device_enrollment_domain}

---

##### `tpsp_disk_encrypted`<sup>Optional</sup> <a name="tpsp_disk_encrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted"></a>

```python
tpsp_disk_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_disk_encrypted PolicyDeviceAssuranceMacos#tpsp_disk_encrypted}

---

##### `tpsp_key_trust_level`<sup>Optional</sup> <a name="tpsp_key_trust_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel"></a>

```python
tpsp_key_trust_level: str
```

- *Type:* str

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_key_trust_level PolicyDeviceAssuranceMacos#tpsp_key_trust_level}

---

##### `tpsp_os_firewall`<sup>Optional</sup> <a name="tpsp_os_firewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall"></a>

```python
tpsp_os_firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_os_firewall PolicyDeviceAssuranceMacos#tpsp_os_firewall}

---

##### `tpsp_os_version`<sup>Optional</sup> <a name="tpsp_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion"></a>

```python
tpsp_os_version: str
```

- *Type:* str

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_os_version PolicyDeviceAssuranceMacos#tpsp_os_version}

---

##### `tpsp_password_proctection_warning_trigger`<sup>Optional</sup> <a name="tpsp_password_proctection_warning_trigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```python
tpsp_password_proctection_warning_trigger: str
```

- *Type:* str

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceMacos#tpsp_password_proctection_warning_trigger}

---

##### `tpsp_realtime_url_check_mode`<sup>Optional</sup> <a name="tpsp_realtime_url_check_mode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode"></a>

```python
tpsp_realtime_url_check_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceMacos#tpsp_realtime_url_check_mode}

---

##### `tpsp_safe_browsing_protection_level`<sup>Optional</sup> <a name="tpsp_safe_browsing_protection_level" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```python
tpsp_safe_browsing_protection_level: str
```

- *Type:* str

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceMacos#tpsp_safe_browsing_protection_level}

---

##### `tpsp_screen_lock_secured`<sup>Optional</sup> <a name="tpsp_screen_lock_secured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured"></a>

```python
tpsp_screen_lock_secured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_screen_lock_secured PolicyDeviceAssuranceMacos#tpsp_screen_lock_secured}

---

##### `tpsp_site_isolation_enabled`<sup>Optional</sup> <a name="tpsp_site_isolation_enabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled"></a>

```python
tpsp_site_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/policy_device_assurance_macos#tpsp_site_isolation_enabled PolicyDeviceAssuranceMacos#tpsp_site_isolation_enabled}

---



