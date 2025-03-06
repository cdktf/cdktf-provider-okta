# `policyDeviceAssuranceMacos` Submodule <a name="`policyDeviceAssuranceMacos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceMacos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceMacos <a name="PolicyDeviceAssuranceMacos" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos okta_policy_device_assurance_macos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_macos.PolicyDeviceAssuranceMacos;

PolicyDeviceAssuranceMacos.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .diskEncryptionType(java.util.List<java.lang.String>)
//  .osVersion(java.lang.String)
//  .screenlockType(java.util.List<java.lang.String>)
//  .secureHardwarePresent(java.lang.Boolean)
//  .secureHardwarePresent(IResolvable)
//  .thirdPartySignalProviders(java.lang.Boolean)
//  .thirdPartySignalProviders(IResolvable)
//  .tpspBrowserVersion(java.lang.String)
//  .tpspBuiltinDnsClientEnabled(java.lang.Boolean)
//  .tpspBuiltinDnsClientEnabled(IResolvable)
//  .tpspChromeRemoteDesktopAppBlocked(java.lang.Boolean)
//  .tpspChromeRemoteDesktopAppBlocked(IResolvable)
//  .tpspDeviceEnrollmentDomain(java.lang.String)
//  .tpspDiskEncrypted(java.lang.Boolean)
//  .tpspDiskEncrypted(IResolvable)
//  .tpspKeyTrustLevel(java.lang.String)
//  .tpspOsFirewall(java.lang.Boolean)
//  .tpspOsFirewall(IResolvable)
//  .tpspOsVersion(java.lang.String)
//  .tpspPasswordProctectionWarningTrigger(java.lang.String)
//  .tpspRealtimeUrlCheckMode(java.lang.Boolean)
//  .tpspRealtimeUrlCheckMode(IResolvable)
//  .tpspSafeBrowsingProtectionLevel(java.lang.String)
//  .tpspScreenLockSecured(java.lang.Boolean)
//  .tpspScreenLockSecured(IResolvable)
//  .tpspSiteIsolationEnabled(java.lang.Boolean)
//  .tpspSiteIsolationEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.diskEncryptionType">diskEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.osVersion">osVersion</a></code> | <code>java.lang.String</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.screenlockType">screenlockType</a></code> | <code>java.util.List<java.lang.String></code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.secureHardwarePresent">secureHardwarePresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>java.lang.String</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>java.lang.String</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsFirewall">tpspOsFirewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsVersion">tpspOsVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>java.lang.String</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>java.lang.String</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider site isolation enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#name PolicyDeviceAssuranceMacos#name}

---

##### `diskEncryptionType`<sup>Optional</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.diskEncryptionType"></a>

- *Type:* java.util.List<java.lang.String>

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#disk_encryption_type PolicyDeviceAssuranceMacos#disk_encryption_type}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.osVersion"></a>

- *Type:* java.lang.String

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#os_version PolicyDeviceAssuranceMacos#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.screenlockType"></a>

- *Type:* java.util.List<java.lang.String>

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#screenlock_type PolicyDeviceAssuranceMacos#screenlock_type}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.secureHardwarePresent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#secure_hardware_present PolicyDeviceAssuranceMacos#secure_hardware_present}

---

##### `thirdPartySignalProviders`<sup>Optional</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.thirdPartySignalProviders"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#third_party_signal_providers PolicyDeviceAssuranceMacos#third_party_signal_providers}

---

##### `tpspBrowserVersion`<sup>Optional</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBrowserVersion"></a>

- *Type:* java.lang.String

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_browser_version PolicyDeviceAssuranceMacos#tpsp_browser_version}

---

##### `tpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspBuiltinDnsClientEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceMacos#tpsp_builtin_dns_client_enabled}

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceMacos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDeviceEnrollmentDomain"></a>

- *Type:* java.lang.String

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_device_enrollment_domain PolicyDeviceAssuranceMacos#tpsp_device_enrollment_domain}

---

##### `tpspDiskEncrypted`<sup>Optional</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspDiskEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_disk_encrypted PolicyDeviceAssuranceMacos#tpsp_disk_encrypted}

---

##### `tpspKeyTrustLevel`<sup>Optional</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspKeyTrustLevel"></a>

- *Type:* java.lang.String

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_key_trust_level PolicyDeviceAssuranceMacos#tpsp_key_trust_level}

---

##### `tpspOsFirewall`<sup>Optional</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsFirewall"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_os_firewall PolicyDeviceAssuranceMacos#tpsp_os_firewall}

---

##### `tpspOsVersion`<sup>Optional</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspOsVersion"></a>

- *Type:* java.lang.String

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_os_version PolicyDeviceAssuranceMacos#tpsp_os_version}

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspPasswordProctectionWarningTrigger"></a>

- *Type:* java.lang.String

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceMacos#tpsp_password_proctection_warning_trigger}

---

##### `tpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspRealtimeUrlCheckMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceMacos#tpsp_realtime_url_check_mode}

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSafeBrowsingProtectionLevel"></a>

- *Type:* java.lang.String

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceMacos#tpsp_safe_browsing_protection_level}

---

##### `tpspScreenLockSecured`<sup>Optional</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspScreenLockSecured"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_screen_lock_secured PolicyDeviceAssuranceMacos#tpsp_screen_lock_secured}

---

##### `tpspSiteIsolationEnabled`<sup>Optional</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.tpspSiteIsolationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_site_isolation_enabled PolicyDeviceAssuranceMacos#tpsp_site_isolation_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType">resetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion">resetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType">resetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent">resetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders">resetThirdPartySignalProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion">resetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled">resetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked">resetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain">resetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted">resetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel">resetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall">resetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion">resetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger">resetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode">resetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel">resetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured">resetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled">resetTpspSiteIsolationEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDiskEncryptionType` <a name="resetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType"></a>

```java
public void resetDiskEncryptionType()
```

##### `resetOsVersion` <a name="resetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion"></a>

```java
public void resetOsVersion()
```

##### `resetScreenlockType` <a name="resetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType"></a>

```java
public void resetScreenlockType()
```

##### `resetSecureHardwarePresent` <a name="resetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent"></a>

```java
public void resetSecureHardwarePresent()
```

##### `resetThirdPartySignalProviders` <a name="resetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders"></a>

```java
public void resetThirdPartySignalProviders()
```

##### `resetTpspBrowserVersion` <a name="resetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion"></a>

```java
public void resetTpspBrowserVersion()
```

##### `resetTpspBuiltinDnsClientEnabled` <a name="resetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled"></a>

```java
public void resetTpspBuiltinDnsClientEnabled()
```

##### `resetTpspChromeRemoteDesktopAppBlocked` <a name="resetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```java
public void resetTpspChromeRemoteDesktopAppBlocked()
```

##### `resetTpspDeviceEnrollmentDomain` <a name="resetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain"></a>

```java
public void resetTpspDeviceEnrollmentDomain()
```

##### `resetTpspDiskEncrypted` <a name="resetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted"></a>

```java
public void resetTpspDiskEncrypted()
```

##### `resetTpspKeyTrustLevel` <a name="resetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel"></a>

```java
public void resetTpspKeyTrustLevel()
```

##### `resetTpspOsFirewall` <a name="resetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall"></a>

```java
public void resetTpspOsFirewall()
```

##### `resetTpspOsVersion` <a name="resetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion"></a>

```java
public void resetTpspOsVersion()
```

##### `resetTpspPasswordProctectionWarningTrigger` <a name="resetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger"></a>

```java
public void resetTpspPasswordProctectionWarningTrigger()
```

##### `resetTpspRealtimeUrlCheckMode` <a name="resetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode"></a>

```java
public void resetTpspRealtimeUrlCheckMode()
```

##### `resetTpspSafeBrowsingProtectionLevel` <a name="resetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel"></a>

```java
public void resetTpspSafeBrowsingProtectionLevel()
```

##### `resetTpspScreenLockSecured` <a name="resetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured"></a>

```java
public void resetTpspScreenLockSecured()
```

##### `resetTpspSiteIsolationEnabled` <a name="resetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled"></a>

```java
public void resetTpspSiteIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_macos.PolicyDeviceAssuranceMacos;

PolicyDeviceAssuranceMacos.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_macos.PolicyDeviceAssuranceMacos;

PolicyDeviceAssuranceMacos.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_macos.PolicyDeviceAssuranceMacos;

PolicyDeviceAssuranceMacos.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_macos.PolicyDeviceAssuranceMacos;

PolicyDeviceAssuranceMacos.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyDeviceAssuranceMacos.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyDeviceAssuranceMacos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyDeviceAssuranceMacos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceMacos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate">lastUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput">diskEncryptionTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput">osVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput">screenlockTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput">secureHardwarePresentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput">thirdPartySignalProvidersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput">tpspBrowserVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput">tpspBuiltinDnsClientEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput">tpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput">tpspDeviceEnrollmentDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput">tpspDiskEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput">tpspKeyTrustLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput">tpspOsFirewallInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput">tpspOsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput">tpspPasswordProctectionWarningTriggerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput">tpspRealtimeUrlCheckModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput">tpspSafeBrowsingProtectionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput">tpspScreenLockSecuredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput">tpspSiteIsolationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType">diskEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType">screenlockType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion">tpspOsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate"></a>

```java
public java.lang.String getLastUpdate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy"></a>

```java
public java.lang.String getLastUpdatedBy();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `diskEncryptionTypeInput`<sup>Optional</sup> <a name="diskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput"></a>

```java
public java.util.List<java.lang.String> getDiskEncryptionTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput"></a>

```java
public java.lang.String getOsVersionInput();
```

- *Type:* java.lang.String

---

##### `screenlockTypeInput`<sup>Optional</sup> <a name="screenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput"></a>

```java
public java.util.List<java.lang.String> getScreenlockTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secureHardwarePresentInput`<sup>Optional</sup> <a name="secureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput"></a>

```java
public java.lang.Object getSecureHardwarePresentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thirdPartySignalProvidersInput`<sup>Optional</sup> <a name="thirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput"></a>

```java
public java.lang.Object getThirdPartySignalProvidersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspBrowserVersionInput`<sup>Optional</sup> <a name="tpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput"></a>

```java
public java.lang.String getTpspBrowserVersionInput();
```

- *Type:* java.lang.String

---

##### `tpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput"></a>

```java
public java.lang.Object getTpspBuiltinDnsClientEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```java
public java.lang.Object getTpspChromeRemoteDesktopAppBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput"></a>

```java
public java.lang.String getTpspDeviceEnrollmentDomainInput();
```

- *Type:* java.lang.String

---

##### `tpspDiskEncryptedInput`<sup>Optional</sup> <a name="tpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput"></a>

```java
public java.lang.Object getTpspDiskEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspKeyTrustLevelInput`<sup>Optional</sup> <a name="tpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput"></a>

```java
public java.lang.String getTpspKeyTrustLevelInput();
```

- *Type:* java.lang.String

---

##### `tpspOsFirewallInput`<sup>Optional</sup> <a name="tpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput"></a>

```java
public java.lang.Object getTpspOsFirewallInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspOsVersionInput`<sup>Optional</sup> <a name="tpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput"></a>

```java
public java.lang.String getTpspOsVersionInput();
```

- *Type:* java.lang.String

---

##### `tpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```java
public java.lang.String getTpspPasswordProctectionWarningTriggerInput();
```

- *Type:* java.lang.String

---

##### `tpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput"></a>

```java
public java.lang.Object getTpspRealtimeUrlCheckModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```java
public java.lang.String getTpspSafeBrowsingProtectionLevelInput();
```

- *Type:* java.lang.String

---

##### `tpspScreenLockSecuredInput`<sup>Optional</sup> <a name="tpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput"></a>

```java
public java.lang.Object getTpspScreenLockSecuredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="tpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput"></a>

```java
public java.lang.Object getTpspSiteIsolationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskEncryptionType`<sup>Required</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType"></a>

```java
public java.util.List<java.lang.String> getDiskEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

##### `screenlockType`<sup>Required</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType"></a>

```java
public java.util.List<java.lang.String> getScreenlockType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secureHardwarePresent`<sup>Required</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent"></a>

```java
public java.lang.Object getSecureHardwarePresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thirdPartySignalProviders`<sup>Required</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders"></a>

```java
public java.lang.Object getThirdPartySignalProviders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspBrowserVersion`<sup>Required</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion"></a>

```java
public java.lang.String getTpspBrowserVersion();
```

- *Type:* java.lang.String

---

##### `tpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled"></a>

```java
public java.lang.Object getTpspBuiltinDnsClientEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```java
public java.lang.Object getTpspChromeRemoteDesktopAppBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain"></a>

```java
public java.lang.String getTpspDeviceEnrollmentDomain();
```

- *Type:* java.lang.String

---

##### `tpspDiskEncrypted`<sup>Required</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted"></a>

```java
public java.lang.Object getTpspDiskEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspKeyTrustLevel`<sup>Required</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel"></a>

```java
public java.lang.String getTpspKeyTrustLevel();
```

- *Type:* java.lang.String

---

##### `tpspOsFirewall`<sup>Required</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall"></a>

```java
public java.lang.Object getTpspOsFirewall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspOsVersion`<sup>Required</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion"></a>

```java
public java.lang.String getTpspOsVersion();
```

- *Type:* java.lang.String

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger"></a>

```java
public java.lang.String getTpspPasswordProctectionWarningTrigger();
```

- *Type:* java.lang.String

---

##### `tpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode"></a>

```java
public java.lang.Object getTpspRealtimeUrlCheckMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel"></a>

```java
public java.lang.String getTpspSafeBrowsingProtectionLevel();
```

- *Type:* java.lang.String

---

##### `tpspScreenLockSecured`<sup>Required</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured"></a>

```java
public java.lang.Object getTpspScreenLockSecured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSiteIsolationEnabled`<sup>Required</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled"></a>

```java
public java.lang.Object getTpspSiteIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceMacosConfig <a name="PolicyDeviceAssuranceMacosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_macos.PolicyDeviceAssuranceMacosConfig;

PolicyDeviceAssuranceMacosConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .diskEncryptionType(java.util.List<java.lang.String>)
//  .osVersion(java.lang.String)
//  .screenlockType(java.util.List<java.lang.String>)
//  .secureHardwarePresent(java.lang.Boolean)
//  .secureHardwarePresent(IResolvable)
//  .thirdPartySignalProviders(java.lang.Boolean)
//  .thirdPartySignalProviders(IResolvable)
//  .tpspBrowserVersion(java.lang.String)
//  .tpspBuiltinDnsClientEnabled(java.lang.Boolean)
//  .tpspBuiltinDnsClientEnabled(IResolvable)
//  .tpspChromeRemoteDesktopAppBlocked(java.lang.Boolean)
//  .tpspChromeRemoteDesktopAppBlocked(IResolvable)
//  .tpspDeviceEnrollmentDomain(java.lang.String)
//  .tpspDiskEncrypted(java.lang.Boolean)
//  .tpspDiskEncrypted(IResolvable)
//  .tpspKeyTrustLevel(java.lang.String)
//  .tpspOsFirewall(java.lang.Boolean)
//  .tpspOsFirewall(IResolvable)
//  .tpspOsVersion(java.lang.String)
//  .tpspPasswordProctectionWarningTrigger(java.lang.String)
//  .tpspRealtimeUrlCheckMode(java.lang.Boolean)
//  .tpspRealtimeUrlCheckMode(IResolvable)
//  .tpspSafeBrowsingProtectionLevel(java.lang.String)
//  .tpspScreenLockSecured(java.lang.Boolean)
//  .tpspScreenLockSecured(IResolvable)
//  .tpspSiteIsolationEnabled(java.lang.Boolean)
//  .tpspSiteIsolationEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType">diskEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType">screenlockType</a></code> | <code>java.util.List<java.lang.String></code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>java.lang.String</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>java.lang.String</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion">tpspOsVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>java.lang.String</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>java.lang.String</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider site isolation enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#name PolicyDeviceAssuranceMacos#name}

---

##### `diskEncryptionType`<sup>Optional</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType"></a>

```java
public java.util.List<java.lang.String> getDiskEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#disk_encryption_type PolicyDeviceAssuranceMacos#disk_encryption_type}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#os_version PolicyDeviceAssuranceMacos#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType"></a>

```java
public java.util.List<java.lang.String> getScreenlockType();
```

- *Type:* java.util.List<java.lang.String>

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#screenlock_type PolicyDeviceAssuranceMacos#screenlock_type}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent"></a>

```java
public java.lang.Object getSecureHardwarePresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#secure_hardware_present PolicyDeviceAssuranceMacos#secure_hardware_present}

---

##### `thirdPartySignalProviders`<sup>Optional</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders"></a>

```java
public java.lang.Object getThirdPartySignalProviders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#third_party_signal_providers PolicyDeviceAssuranceMacos#third_party_signal_providers}

---

##### `tpspBrowserVersion`<sup>Optional</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion"></a>

```java
public java.lang.String getTpspBrowserVersion();
```

- *Type:* java.lang.String

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_browser_version PolicyDeviceAssuranceMacos#tpsp_browser_version}

---

##### `tpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```java
public java.lang.Object getTpspBuiltinDnsClientEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceMacos#tpsp_builtin_dns_client_enabled}

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```java
public java.lang.Object getTpspChromeRemoteDesktopAppBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceMacos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain"></a>

```java
public java.lang.String getTpspDeviceEnrollmentDomain();
```

- *Type:* java.lang.String

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_device_enrollment_domain PolicyDeviceAssuranceMacos#tpsp_device_enrollment_domain}

---

##### `tpspDiskEncrypted`<sup>Optional</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted"></a>

```java
public java.lang.Object getTpspDiskEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_disk_encrypted PolicyDeviceAssuranceMacos#tpsp_disk_encrypted}

---

##### `tpspKeyTrustLevel`<sup>Optional</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel"></a>

```java
public java.lang.String getTpspKeyTrustLevel();
```

- *Type:* java.lang.String

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_key_trust_level PolicyDeviceAssuranceMacos#tpsp_key_trust_level}

---

##### `tpspOsFirewall`<sup>Optional</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall"></a>

```java
public java.lang.Object getTpspOsFirewall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_os_firewall PolicyDeviceAssuranceMacos#tpsp_os_firewall}

---

##### `tpspOsVersion`<sup>Optional</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion"></a>

```java
public java.lang.String getTpspOsVersion();
```

- *Type:* java.lang.String

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_os_version PolicyDeviceAssuranceMacos#tpsp_os_version}

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```java
public java.lang.String getTpspPasswordProctectionWarningTrigger();
```

- *Type:* java.lang.String

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceMacos#tpsp_password_proctection_warning_trigger}

---

##### `tpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode"></a>

```java
public java.lang.Object getTpspRealtimeUrlCheckMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceMacos#tpsp_realtime_url_check_mode}

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```java
public java.lang.String getTpspSafeBrowsingProtectionLevel();
```

- *Type:* java.lang.String

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceMacos#tpsp_safe_browsing_protection_level}

---

##### `tpspScreenLockSecured`<sup>Optional</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured"></a>

```java
public java.lang.Object getTpspScreenLockSecured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_screen_lock_secured PolicyDeviceAssuranceMacos#tpsp_screen_lock_secured}

---

##### `tpspSiteIsolationEnabled`<sup>Optional</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled"></a>

```java
public java.lang.Object getTpspSiteIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_site_isolation_enabled PolicyDeviceAssuranceMacos#tpsp_site_isolation_enabled}

---



