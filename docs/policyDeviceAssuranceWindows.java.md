# `okta_policy_device_assurance_windows`

Refer to the Terraform Registory for docs: [`okta_policy_device_assurance_windows`](https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows).

# `policyDeviceAssuranceWindows` Submodule <a name="`policyDeviceAssuranceWindows` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceWindows <a name="PolicyDeviceAssuranceWindows" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows okta_policy_device_assurance_windows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_windows.PolicyDeviceAssuranceWindows;

PolicyDeviceAssuranceWindows.Builder.create(Construct scope, java.lang.String id)
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
//  .tpspCrowdStrikeAgentId(java.lang.String)
//  .tpspCrowdStrikeCustomerId(java.lang.String)
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
//  .tpspSecureBootEnabled(java.lang.Boolean)
//  .tpspSecureBootEnabled(IResolvable)
//  .tpspSiteIsolationEnabled(java.lang.Boolean)
//  .tpspSiteIsolationEnabled(IResolvable)
//  .tpspThirdPartyBlockingEnabled(java.lang.Boolean)
//  .tpspThirdPartyBlockingEnabled(IResolvable)
//  .tpspWindowsMachineDomain(java.lang.String)
//  .tpspWindowsUserDomain(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.diskEncryptionType">diskEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | List of disk encryption type, can be ALL_INTERNAL_VOLUMES. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.osVersion">osVersion</a></code> | <code>java.lang.String</code> | The device os minimum version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.screenlockType">screenlockType</a></code> | <code>java.util.List<java.lang.String></code> | List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.secureHardwarePresent">secureHardwarePresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the device constains a secure hardware functionality. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeAgentId">tpspCrowdStrikeAgentId</a></code> | <code>java.lang.String</code> | Third party signal provider crowdstrike agent id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeCustomerId">tpspCrowdStrikeCustomerId</a></code> | <code>java.lang.String</code> | Third party signal provider crowdstrike user id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>java.lang.String</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>java.lang.String</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsFirewall">tpspOsFirewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsVersion">tpspOsVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>java.lang.String</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>java.lang.String</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSecureBootEnabled">tpspSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider secure boot enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider site isolation enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspThirdPartyBlockingEnabled">tpspThirdPartyBlockingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider third party blocking enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsMachineDomain">tpspWindowsMachineDomain</a></code> | <code>java.lang.String</code> | Third party signal provider windows machine domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsUserDomain">tpspWindowsUserDomain</a></code> | <code>java.lang.String</code> | Third party signal provider windows user domain. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}

---

##### `diskEncryptionType`<sup>Optional</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.diskEncryptionType"></a>

- *Type:* java.util.List<java.lang.String>

List of disk encryption type, can be ALL_INTERNAL_VOLUMES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.osVersion"></a>

- *Type:* java.lang.String

The device os minimum version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.screenlockType"></a>

- *Type:* java.util.List<java.lang.String>

List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.secureHardwarePresent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the device constains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}

---

##### `thirdPartySignalProviders`<sup>Optional</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.thirdPartySignalProviders"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}

---

##### `tpspBrowserVersion`<sup>Optional</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBrowserVersion"></a>

- *Type:* java.lang.String

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}

---

##### `tpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspBuiltinDnsClientEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspChromeRemoteDesktopAppBlocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpspCrowdStrikeAgentId`<sup>Optional</sup> <a name="tpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeAgentId"></a>

- *Type:* java.lang.String

Third party signal provider crowdstrike agent id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}

---

##### `tpspCrowdStrikeCustomerId`<sup>Optional</sup> <a name="tpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspCrowdStrikeCustomerId"></a>

- *Type:* java.lang.String

Third party signal provider crowdstrike user id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}

---

##### `tpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDeviceEnrollmentDomain"></a>

- *Type:* java.lang.String

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}

---

##### `tpspDiskEncrypted`<sup>Optional</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspDiskEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}

---

##### `tpspKeyTrustLevel`<sup>Optional</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspKeyTrustLevel"></a>

- *Type:* java.lang.String

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}

---

##### `tpspOsFirewall`<sup>Optional</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsFirewall"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}

---

##### `tpspOsVersion`<sup>Optional</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspOsVersion"></a>

- *Type:* java.lang.String

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspPasswordProctectionWarningTrigger"></a>

- *Type:* java.lang.String

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}

---

##### `tpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspRealtimeUrlCheckMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSafeBrowsingProtectionLevel"></a>

- *Type:* java.lang.String

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}

---

##### `tpspScreenLockSecured`<sup>Optional</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspScreenLockSecured"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}

---

##### `tpspSecureBootEnabled`<sup>Optional</sup> <a name="tpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSecureBootEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider secure boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}

---

##### `tpspSiteIsolationEnabled`<sup>Optional</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspSiteIsolationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}

---

##### `tpspThirdPartyBlockingEnabled`<sup>Optional</sup> <a name="tpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspThirdPartyBlockingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider third party blocking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}

---

##### `tpspWindowsMachineDomain`<sup>Optional</sup> <a name="tpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsMachineDomain"></a>

- *Type:* java.lang.String

Third party signal provider windows machine domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}

---

##### `tpspWindowsUserDomain`<sup>Optional</sup> <a name="tpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.tpspWindowsUserDomain"></a>

- *Type:* java.lang.String

Third party signal provider windows user domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType">resetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion">resetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType">resetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent">resetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders">resetThirdPartySignalProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion">resetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled">resetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked">resetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId">resetTpspCrowdStrikeAgentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId">resetTpspCrowdStrikeCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain">resetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted">resetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel">resetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall">resetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion">resetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger">resetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode">resetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel">resetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured">resetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled">resetTpspSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled">resetTpspSiteIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled">resetTpspThirdPartyBlockingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain">resetTpspWindowsMachineDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain">resetTpspWindowsUserDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDiskEncryptionType` <a name="resetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType"></a>

```java
public void resetDiskEncryptionType()
```

##### `resetOsVersion` <a name="resetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion"></a>

```java
public void resetOsVersion()
```

##### `resetScreenlockType` <a name="resetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType"></a>

```java
public void resetScreenlockType()
```

##### `resetSecureHardwarePresent` <a name="resetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent"></a>

```java
public void resetSecureHardwarePresent()
```

##### `resetThirdPartySignalProviders` <a name="resetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders"></a>

```java
public void resetThirdPartySignalProviders()
```

##### `resetTpspBrowserVersion` <a name="resetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion"></a>

```java
public void resetTpspBrowserVersion()
```

##### `resetTpspBuiltinDnsClientEnabled` <a name="resetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled"></a>

```java
public void resetTpspBuiltinDnsClientEnabled()
```

##### `resetTpspChromeRemoteDesktopAppBlocked` <a name="resetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked"></a>

```java
public void resetTpspChromeRemoteDesktopAppBlocked()
```

##### `resetTpspCrowdStrikeAgentId` <a name="resetTpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId"></a>

```java
public void resetTpspCrowdStrikeAgentId()
```

##### `resetTpspCrowdStrikeCustomerId` <a name="resetTpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId"></a>

```java
public void resetTpspCrowdStrikeCustomerId()
```

##### `resetTpspDeviceEnrollmentDomain` <a name="resetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain"></a>

```java
public void resetTpspDeviceEnrollmentDomain()
```

##### `resetTpspDiskEncrypted` <a name="resetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted"></a>

```java
public void resetTpspDiskEncrypted()
```

##### `resetTpspKeyTrustLevel` <a name="resetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel"></a>

```java
public void resetTpspKeyTrustLevel()
```

##### `resetTpspOsFirewall` <a name="resetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall"></a>

```java
public void resetTpspOsFirewall()
```

##### `resetTpspOsVersion` <a name="resetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion"></a>

```java
public void resetTpspOsVersion()
```

##### `resetTpspPasswordProctectionWarningTrigger` <a name="resetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger"></a>

```java
public void resetTpspPasswordProctectionWarningTrigger()
```

##### `resetTpspRealtimeUrlCheckMode` <a name="resetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode"></a>

```java
public void resetTpspRealtimeUrlCheckMode()
```

##### `resetTpspSafeBrowsingProtectionLevel` <a name="resetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel"></a>

```java
public void resetTpspSafeBrowsingProtectionLevel()
```

##### `resetTpspScreenLockSecured` <a name="resetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured"></a>

```java
public void resetTpspScreenLockSecured()
```

##### `resetTpspSecureBootEnabled` <a name="resetTpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled"></a>

```java
public void resetTpspSecureBootEnabled()
```

##### `resetTpspSiteIsolationEnabled` <a name="resetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled"></a>

```java
public void resetTpspSiteIsolationEnabled()
```

##### `resetTpspThirdPartyBlockingEnabled` <a name="resetTpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled"></a>

```java
public void resetTpspThirdPartyBlockingEnabled()
```

##### `resetTpspWindowsMachineDomain` <a name="resetTpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain"></a>

```java
public void resetTpspWindowsMachineDomain()
```

##### `resetTpspWindowsUserDomain` <a name="resetTpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain"></a>

```java
public void resetTpspWindowsUserDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_windows.PolicyDeviceAssuranceWindows;

PolicyDeviceAssuranceWindows.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_windows.PolicyDeviceAssuranceWindows;

PolicyDeviceAssuranceWindows.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_windows.PolicyDeviceAssuranceWindows;

PolicyDeviceAssuranceWindows.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_windows.PolicyDeviceAssuranceWindows;

PolicyDeviceAssuranceWindows.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyDeviceAssuranceWindows.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyDeviceAssuranceWindows to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyDeviceAssuranceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate">lastUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput">diskEncryptionTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput">osVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput">screenlockTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput">secureHardwarePresentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput">thirdPartySignalProvidersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput">tpspBrowserVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput">tpspBuiltinDnsClientEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput">tpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput">tpspCrowdStrikeAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput">tpspCrowdStrikeCustomerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput">tpspDeviceEnrollmentDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput">tpspDiskEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput">tpspKeyTrustLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput">tpspOsFirewallInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput">tpspOsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput">tpspPasswordProctectionWarningTriggerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput">tpspRealtimeUrlCheckModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput">tpspSafeBrowsingProtectionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput">tpspScreenLockSecuredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput">tpspSecureBootEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput">tpspSiteIsolationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput">tpspThirdPartyBlockingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput">tpspWindowsMachineDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput">tpspWindowsUserDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType">diskEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType">screenlockType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId">tpspCrowdStrikeAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId">tpspCrowdStrikeCustomerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion">tpspOsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled">tpspSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled">tpspThirdPartyBlockingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain">tpspWindowsMachineDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain">tpspWindowsUserDomain</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate"></a>

```java
public java.lang.String getLastUpdate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy"></a>

```java
public java.lang.String getLastUpdatedBy();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `diskEncryptionTypeInput`<sup>Optional</sup> <a name="diskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput"></a>

```java
public java.util.List<java.lang.String> getDiskEncryptionTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput"></a>

```java
public java.lang.String getOsVersionInput();
```

- *Type:* java.lang.String

---

##### `screenlockTypeInput`<sup>Optional</sup> <a name="screenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput"></a>

```java
public java.util.List<java.lang.String> getScreenlockTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secureHardwarePresentInput`<sup>Optional</sup> <a name="secureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput"></a>

```java
public java.lang.Object getSecureHardwarePresentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thirdPartySignalProvidersInput`<sup>Optional</sup> <a name="thirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput"></a>

```java
public java.lang.Object getThirdPartySignalProvidersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspBrowserVersionInput`<sup>Optional</sup> <a name="tpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput"></a>

```java
public java.lang.String getTpspBrowserVersionInput();
```

- *Type:* java.lang.String

---

##### `tpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput"></a>

```java
public java.lang.Object getTpspBuiltinDnsClientEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```java
public java.lang.Object getTpspChromeRemoteDesktopAppBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspCrowdStrikeAgentIdInput`<sup>Optional</sup> <a name="tpspCrowdStrikeAgentIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput"></a>

```java
public java.lang.String getTpspCrowdStrikeAgentIdInput();
```

- *Type:* java.lang.String

---

##### `tpspCrowdStrikeCustomerIdInput`<sup>Optional</sup> <a name="tpspCrowdStrikeCustomerIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput"></a>

```java
public java.lang.String getTpspCrowdStrikeCustomerIdInput();
```

- *Type:* java.lang.String

---

##### `tpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput"></a>

```java
public java.lang.String getTpspDeviceEnrollmentDomainInput();
```

- *Type:* java.lang.String

---

##### `tpspDiskEncryptedInput`<sup>Optional</sup> <a name="tpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput"></a>

```java
public java.lang.Object getTpspDiskEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspKeyTrustLevelInput`<sup>Optional</sup> <a name="tpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput"></a>

```java
public java.lang.String getTpspKeyTrustLevelInput();
```

- *Type:* java.lang.String

---

##### `tpspOsFirewallInput`<sup>Optional</sup> <a name="tpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput"></a>

```java
public java.lang.Object getTpspOsFirewallInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspOsVersionInput`<sup>Optional</sup> <a name="tpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput"></a>

```java
public java.lang.String getTpspOsVersionInput();
```

- *Type:* java.lang.String

---

##### `tpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput"></a>

```java
public java.lang.String getTpspPasswordProctectionWarningTriggerInput();
```

- *Type:* java.lang.String

---

##### `tpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput"></a>

```java
public java.lang.Object getTpspRealtimeUrlCheckModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput"></a>

```java
public java.lang.String getTpspSafeBrowsingProtectionLevelInput();
```

- *Type:* java.lang.String

---

##### `tpspScreenLockSecuredInput`<sup>Optional</sup> <a name="tpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput"></a>

```java
public java.lang.Object getTpspScreenLockSecuredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSecureBootEnabledInput`<sup>Optional</sup> <a name="tpspSecureBootEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput"></a>

```java
public java.lang.Object getTpspSecureBootEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="tpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput"></a>

```java
public java.lang.Object getTpspSiteIsolationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspThirdPartyBlockingEnabledInput`<sup>Optional</sup> <a name="tpspThirdPartyBlockingEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput"></a>

```java
public java.lang.Object getTpspThirdPartyBlockingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspWindowsMachineDomainInput`<sup>Optional</sup> <a name="tpspWindowsMachineDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput"></a>

```java
public java.lang.String getTpspWindowsMachineDomainInput();
```

- *Type:* java.lang.String

---

##### `tpspWindowsUserDomainInput`<sup>Optional</sup> <a name="tpspWindowsUserDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput"></a>

```java
public java.lang.String getTpspWindowsUserDomainInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionType`<sup>Required</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType"></a>

```java
public java.util.List<java.lang.String> getDiskEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

##### `screenlockType`<sup>Required</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType"></a>

```java
public java.util.List<java.lang.String> getScreenlockType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secureHardwarePresent`<sup>Required</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent"></a>

```java
public java.lang.Object getSecureHardwarePresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thirdPartySignalProviders`<sup>Required</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders"></a>

```java
public java.lang.Object getThirdPartySignalProviders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspBrowserVersion`<sup>Required</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion"></a>

```java
public java.lang.String getTpspBrowserVersion();
```

- *Type:* java.lang.String

---

##### `tpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled"></a>

```java
public java.lang.Object getTpspBuiltinDnsClientEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked"></a>

```java
public java.lang.Object getTpspChromeRemoteDesktopAppBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspCrowdStrikeAgentId`<sup>Required</sup> <a name="tpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId"></a>

```java
public java.lang.String getTpspCrowdStrikeAgentId();
```

- *Type:* java.lang.String

---

##### `tpspCrowdStrikeCustomerId`<sup>Required</sup> <a name="tpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId"></a>

```java
public java.lang.String getTpspCrowdStrikeCustomerId();
```

- *Type:* java.lang.String

---

##### `tpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain"></a>

```java
public java.lang.String getTpspDeviceEnrollmentDomain();
```

- *Type:* java.lang.String

---

##### `tpspDiskEncrypted`<sup>Required</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted"></a>

```java
public java.lang.Object getTpspDiskEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspKeyTrustLevel`<sup>Required</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel"></a>

```java
public java.lang.String getTpspKeyTrustLevel();
```

- *Type:* java.lang.String

---

##### `tpspOsFirewall`<sup>Required</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall"></a>

```java
public java.lang.Object getTpspOsFirewall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspOsVersion`<sup>Required</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion"></a>

```java
public java.lang.String getTpspOsVersion();
```

- *Type:* java.lang.String

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger"></a>

```java
public java.lang.String getTpspPasswordProctectionWarningTrigger();
```

- *Type:* java.lang.String

---

##### `tpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode"></a>

```java
public java.lang.Object getTpspRealtimeUrlCheckMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel"></a>

```java
public java.lang.String getTpspSafeBrowsingProtectionLevel();
```

- *Type:* java.lang.String

---

##### `tpspScreenLockSecured`<sup>Required</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured"></a>

```java
public java.lang.Object getTpspScreenLockSecured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSecureBootEnabled`<sup>Required</sup> <a name="tpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled"></a>

```java
public java.lang.Object getTpspSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspSiteIsolationEnabled`<sup>Required</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled"></a>

```java
public java.lang.Object getTpspSiteIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspThirdPartyBlockingEnabled`<sup>Required</sup> <a name="tpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled"></a>

```java
public java.lang.Object getTpspThirdPartyBlockingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tpspWindowsMachineDomain`<sup>Required</sup> <a name="tpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain"></a>

```java
public java.lang.String getTpspWindowsMachineDomain();
```

- *Type:* java.lang.String

---

##### `tpspWindowsUserDomain`<sup>Required</sup> <a name="tpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain"></a>

```java
public java.lang.String getTpspWindowsUserDomain();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceWindowsConfig <a name="PolicyDeviceAssuranceWindowsConfig" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_device_assurance_windows.PolicyDeviceAssuranceWindowsConfig;

PolicyDeviceAssuranceWindowsConfig.builder()
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
//  .tpspCrowdStrikeAgentId(java.lang.String)
//  .tpspCrowdStrikeCustomerId(java.lang.String)
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
//  .tpspSecureBootEnabled(java.lang.Boolean)
//  .tpspSecureBootEnabled(IResolvable)
//  .tpspSiteIsolationEnabled(java.lang.Boolean)
//  .tpspSiteIsolationEnabled(IResolvable)
//  .tpspThirdPartyBlockingEnabled(java.lang.Boolean)
//  .tpspThirdPartyBlockingEnabled(IResolvable)
//  .tpspWindowsMachineDomain(java.lang.String)
//  .tpspWindowsUserDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType">diskEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | List of disk encryption type, can be ALL_INTERNAL_VOLUMES. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | The device os minimum version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType">screenlockType</a></code> | <code>java.util.List<java.lang.String></code> | List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the device constains a secure hardware functionality. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId">tpspCrowdStrikeAgentId</a></code> | <code>java.lang.String</code> | Third party signal provider crowdstrike agent id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId">tpspCrowdStrikeCustomerId</a></code> | <code>java.lang.String</code> | Third party signal provider crowdstrike user id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>java.lang.String</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>java.lang.String</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion">tpspOsVersion</a></code> | <code>java.lang.String</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>java.lang.String</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>java.lang.String</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled">tpspSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider secure boot enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider site isolation enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled">tpspThirdPartyBlockingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Third party signal provider third party blocking enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain">tpspWindowsMachineDomain</a></code> | <code>java.lang.String</code> | Third party signal provider windows machine domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain">tpspWindowsUserDomain</a></code> | <code>java.lang.String</code> | Third party signal provider windows user domain. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}

---

##### `diskEncryptionType`<sup>Optional</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType"></a>

```java
public java.util.List<java.lang.String> getDiskEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

List of disk encryption type, can be ALL_INTERNAL_VOLUMES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

The device os minimum version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType"></a>

```java
public java.util.List<java.lang.String> getScreenlockType();
```

- *Type:* java.util.List<java.lang.String>

List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent"></a>

```java
public java.lang.Object getSecureHardwarePresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the device constains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}

---

##### `thirdPartySignalProviders`<sup>Optional</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders"></a>

```java
public java.lang.Object getThirdPartySignalProviders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}

---

##### `tpspBrowserVersion`<sup>Optional</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion"></a>

```java
public java.lang.String getTpspBrowserVersion();
```

- *Type:* java.lang.String

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}

---

##### `tpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled"></a>

```java
public java.lang.Object getTpspBuiltinDnsClientEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```java
public java.lang.Object getTpspChromeRemoteDesktopAppBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpspCrowdStrikeAgentId`<sup>Optional</sup> <a name="tpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId"></a>

```java
public java.lang.String getTpspCrowdStrikeAgentId();
```

- *Type:* java.lang.String

Third party signal provider crowdstrike agent id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}

---

##### `tpspCrowdStrikeCustomerId`<sup>Optional</sup> <a name="tpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId"></a>

```java
public java.lang.String getTpspCrowdStrikeCustomerId();
```

- *Type:* java.lang.String

Third party signal provider crowdstrike user id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}

---

##### `tpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain"></a>

```java
public java.lang.String getTpspDeviceEnrollmentDomain();
```

- *Type:* java.lang.String

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}

---

##### `tpspDiskEncrypted`<sup>Optional</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted"></a>

```java
public java.lang.Object getTpspDiskEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}

---

##### `tpspKeyTrustLevel`<sup>Optional</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel"></a>

```java
public java.lang.String getTpspKeyTrustLevel();
```

- *Type:* java.lang.String

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}

---

##### `tpspOsFirewall`<sup>Optional</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall"></a>

```java
public java.lang.Object getTpspOsFirewall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}

---

##### `tpspOsVersion`<sup>Optional</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion"></a>

```java
public java.lang.String getTpspOsVersion();
```

- *Type:* java.lang.String

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```java
public java.lang.String getTpspPasswordProctectionWarningTrigger();
```

- *Type:* java.lang.String

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}

---

##### `tpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode"></a>

```java
public java.lang.Object getTpspRealtimeUrlCheckMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```java
public java.lang.String getTpspSafeBrowsingProtectionLevel();
```

- *Type:* java.lang.String

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}

---

##### `tpspScreenLockSecured`<sup>Optional</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured"></a>

```java
public java.lang.Object getTpspScreenLockSecured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}

---

##### `tpspSecureBootEnabled`<sup>Optional</sup> <a name="tpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled"></a>

```java
public java.lang.Object getTpspSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider secure boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}

---

##### `tpspSiteIsolationEnabled`<sup>Optional</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled"></a>

```java
public java.lang.Object getTpspSiteIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}

---

##### `tpspThirdPartyBlockingEnabled`<sup>Optional</sup> <a name="tpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled"></a>

```java
public java.lang.Object getTpspThirdPartyBlockingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Third party signal provider third party blocking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}

---

##### `tpspWindowsMachineDomain`<sup>Optional</sup> <a name="tpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain"></a>

```java
public java.lang.String getTpspWindowsMachineDomain();
```

- *Type:* java.lang.String

Third party signal provider windows machine domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}

---

##### `tpspWindowsUserDomain`<sup>Optional</sup> <a name="tpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain"></a>

```java
public java.lang.String getTpspWindowsUserDomain();
```

- *Type:* java.lang.String

Third party signal provider windows user domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}

---



