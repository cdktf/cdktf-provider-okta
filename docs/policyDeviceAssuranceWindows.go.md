# `okta_policy_device_assurance_windows`

Refer to the Terraform Registory for docs: [`okta_policy_device_assurance_windows`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows).

# `policyDeviceAssuranceWindows` Submodule <a name="`policyDeviceAssuranceWindows` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceWindows <a name="PolicyDeviceAssuranceWindows" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows okta_policy_device_assurance_windows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policydeviceassurancewindows"

policydeviceassurancewindows.NewPolicyDeviceAssuranceWindows(scope Construct, id *string, config PolicyDeviceAssuranceWindowsConfig) PolicyDeviceAssuranceWindows
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig">PolicyDeviceAssuranceWindowsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig">PolicyDeviceAssuranceWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType">ResetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion">ResetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType">ResetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent">ResetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders">ResetThirdPartySignalProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion">ResetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled">ResetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked">ResetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId">ResetTpspCrowdStrikeAgentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId">ResetTpspCrowdStrikeCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain">ResetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted">ResetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel">ResetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall">ResetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion">ResetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger">ResetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode">ResetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel">ResetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured">ResetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled">ResetTpspSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled">ResetTpspSiteIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled">ResetTpspThirdPartyBlockingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain">ResetTpspWindowsMachineDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain">ResetTpspWindowsUserDomain</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDiskEncryptionType` <a name="ResetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType"></a>

```go
func ResetDiskEncryptionType()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion"></a>

```go
func ResetOsVersion()
```

##### `ResetScreenlockType` <a name="ResetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType"></a>

```go
func ResetScreenlockType()
```

##### `ResetSecureHardwarePresent` <a name="ResetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent"></a>

```go
func ResetSecureHardwarePresent()
```

##### `ResetThirdPartySignalProviders` <a name="ResetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders"></a>

```go
func ResetThirdPartySignalProviders()
```

##### `ResetTpspBrowserVersion` <a name="ResetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion"></a>

```go
func ResetTpspBrowserVersion()
```

##### `ResetTpspBuiltinDnsClientEnabled` <a name="ResetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled"></a>

```go
func ResetTpspBuiltinDnsClientEnabled()
```

##### `ResetTpspChromeRemoteDesktopAppBlocked` <a name="ResetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked"></a>

```go
func ResetTpspChromeRemoteDesktopAppBlocked()
```

##### `ResetTpspCrowdStrikeAgentId` <a name="ResetTpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId"></a>

```go
func ResetTpspCrowdStrikeAgentId()
```

##### `ResetTpspCrowdStrikeCustomerId` <a name="ResetTpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId"></a>

```go
func ResetTpspCrowdStrikeCustomerId()
```

##### `ResetTpspDeviceEnrollmentDomain` <a name="ResetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain"></a>

```go
func ResetTpspDeviceEnrollmentDomain()
```

##### `ResetTpspDiskEncrypted` <a name="ResetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted"></a>

```go
func ResetTpspDiskEncrypted()
```

##### `ResetTpspKeyTrustLevel` <a name="ResetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel"></a>

```go
func ResetTpspKeyTrustLevel()
```

##### `ResetTpspOsFirewall` <a name="ResetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall"></a>

```go
func ResetTpspOsFirewall()
```

##### `ResetTpspOsVersion` <a name="ResetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion"></a>

```go
func ResetTpspOsVersion()
```

##### `ResetTpspPasswordProctectionWarningTrigger` <a name="ResetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger"></a>

```go
func ResetTpspPasswordProctectionWarningTrigger()
```

##### `ResetTpspRealtimeUrlCheckMode` <a name="ResetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode"></a>

```go
func ResetTpspRealtimeUrlCheckMode()
```

##### `ResetTpspSafeBrowsingProtectionLevel` <a name="ResetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel"></a>

```go
func ResetTpspSafeBrowsingProtectionLevel()
```

##### `ResetTpspScreenLockSecured` <a name="ResetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured"></a>

```go
func ResetTpspScreenLockSecured()
```

##### `ResetTpspSecureBootEnabled` <a name="ResetTpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled"></a>

```go
func ResetTpspSecureBootEnabled()
```

##### `ResetTpspSiteIsolationEnabled` <a name="ResetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled"></a>

```go
func ResetTpspSiteIsolationEnabled()
```

##### `ResetTpspThirdPartyBlockingEnabled` <a name="ResetTpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled"></a>

```go
func ResetTpspThirdPartyBlockingEnabled()
```

##### `ResetTpspWindowsMachineDomain` <a name="ResetTpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain"></a>

```go
func ResetTpspWindowsMachineDomain()
```

##### `ResetTpspWindowsUserDomain` <a name="ResetTpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain"></a>

```go
func ResetTpspWindowsUserDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policydeviceassurancewindows"

policydeviceassurancewindows.PolicyDeviceAssuranceWindows_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policydeviceassurancewindows"

policydeviceassurancewindows.PolicyDeviceAssuranceWindows_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policydeviceassurancewindows"

policydeviceassurancewindows.PolicyDeviceAssuranceWindows_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate">LastUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput">DiskEncryptionTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput">OsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput">ScreenlockTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput">SecureHardwarePresentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput">ThirdPartySignalProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput">TpspBrowserVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput">TpspBuiltinDnsClientEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput">TpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput">TpspCrowdStrikeAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput">TpspCrowdStrikeCustomerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput">TpspDeviceEnrollmentDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput">TpspDiskEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput">TpspKeyTrustLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput">TpspOsFirewallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput">TpspOsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput">TpspPasswordProctectionWarningTriggerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput">TpspRealtimeUrlCheckModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput">TpspSafeBrowsingProtectionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput">TpspScreenLockSecuredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput">TpspSecureBootEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput">TpspSiteIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput">TpspThirdPartyBlockingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput">TpspWindowsMachineDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput">TpspWindowsUserDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType">ScreenlockType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId">TpspCrowdStrikeAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId">TpspCrowdStrikeCustomerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion">TpspOsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled">TpspSecureBootEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled">TpspThirdPartyBlockingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain">TpspWindowsMachineDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain">TpspWindowsUserDomain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate"></a>

```go
func LastUpdate() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `DiskEncryptionTypeInput`<sup>Optional</sup> <a name="DiskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput"></a>

```go
func DiskEncryptionTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput"></a>

```go
func OsVersionInput() *string
```

- *Type:* *string

---

##### `ScreenlockTypeInput`<sup>Optional</sup> <a name="ScreenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput"></a>

```go
func ScreenlockTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecureHardwarePresentInput`<sup>Optional</sup> <a name="SecureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput"></a>

```go
func SecureHardwarePresentInput() interface{}
```

- *Type:* interface{}

---

##### `ThirdPartySignalProvidersInput`<sup>Optional</sup> <a name="ThirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput"></a>

```go
func ThirdPartySignalProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `TpspBrowserVersionInput`<sup>Optional</sup> <a name="TpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput"></a>

```go
func TpspBrowserVersionInput() *string
```

- *Type:* *string

---

##### `TpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput"></a>

```go
func TpspBuiltinDnsClientEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```go
func TpspChromeRemoteDesktopAppBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `TpspCrowdStrikeAgentIdInput`<sup>Optional</sup> <a name="TpspCrowdStrikeAgentIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput"></a>

```go
func TpspCrowdStrikeAgentIdInput() *string
```

- *Type:* *string

---

##### `TpspCrowdStrikeCustomerIdInput`<sup>Optional</sup> <a name="TpspCrowdStrikeCustomerIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput"></a>

```go
func TpspCrowdStrikeCustomerIdInput() *string
```

- *Type:* *string

---

##### `TpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput"></a>

```go
func TpspDeviceEnrollmentDomainInput() *string
```

- *Type:* *string

---

##### `TpspDiskEncryptedInput`<sup>Optional</sup> <a name="TpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput"></a>

```go
func TpspDiskEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `TpspKeyTrustLevelInput`<sup>Optional</sup> <a name="TpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput"></a>

```go
func TpspKeyTrustLevelInput() *string
```

- *Type:* *string

---

##### `TpspOsFirewallInput`<sup>Optional</sup> <a name="TpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput"></a>

```go
func TpspOsFirewallInput() interface{}
```

- *Type:* interface{}

---

##### `TpspOsVersionInput`<sup>Optional</sup> <a name="TpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput"></a>

```go
func TpspOsVersionInput() *string
```

- *Type:* *string

---

##### `TpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput"></a>

```go
func TpspPasswordProctectionWarningTriggerInput() *string
```

- *Type:* *string

---

##### `TpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput"></a>

```go
func TpspRealtimeUrlCheckModeInput() interface{}
```

- *Type:* interface{}

---

##### `TpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput"></a>

```go
func TpspSafeBrowsingProtectionLevelInput() *string
```

- *Type:* *string

---

##### `TpspScreenLockSecuredInput`<sup>Optional</sup> <a name="TpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput"></a>

```go
func TpspScreenLockSecuredInput() interface{}
```

- *Type:* interface{}

---

##### `TpspSecureBootEnabledInput`<sup>Optional</sup> <a name="TpspSecureBootEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput"></a>

```go
func TpspSecureBootEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="TpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput"></a>

```go
func TpspSiteIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TpspThirdPartyBlockingEnabledInput`<sup>Optional</sup> <a name="TpspThirdPartyBlockingEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput"></a>

```go
func TpspThirdPartyBlockingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TpspWindowsMachineDomainInput`<sup>Optional</sup> <a name="TpspWindowsMachineDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput"></a>

```go
func TpspWindowsMachineDomainInput() *string
```

- *Type:* *string

---

##### `TpspWindowsUserDomainInput`<sup>Optional</sup> <a name="TpspWindowsUserDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput"></a>

```go
func TpspWindowsUserDomainInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionType`<sup>Required</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType"></a>

```go
func DiskEncryptionType() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `ScreenlockType`<sup>Required</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType"></a>

```go
func ScreenlockType() *[]*string
```

- *Type:* *[]*string

---

##### `SecureHardwarePresent`<sup>Required</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent"></a>

```go
func SecureHardwarePresent() interface{}
```

- *Type:* interface{}

---

##### `ThirdPartySignalProviders`<sup>Required</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders"></a>

```go
func ThirdPartySignalProviders() interface{}
```

- *Type:* interface{}

---

##### `TpspBrowserVersion`<sup>Required</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion"></a>

```go
func TpspBrowserVersion() *string
```

- *Type:* *string

---

##### `TpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled"></a>

```go
func TpspBuiltinDnsClientEnabled() interface{}
```

- *Type:* interface{}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked"></a>

```go
func TpspChromeRemoteDesktopAppBlocked() interface{}
```

- *Type:* interface{}

---

##### `TpspCrowdStrikeAgentId`<sup>Required</sup> <a name="TpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId"></a>

```go
func TpspCrowdStrikeAgentId() *string
```

- *Type:* *string

---

##### `TpspCrowdStrikeCustomerId`<sup>Required</sup> <a name="TpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId"></a>

```go
func TpspCrowdStrikeCustomerId() *string
```

- *Type:* *string

---

##### `TpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain"></a>

```go
func TpspDeviceEnrollmentDomain() *string
```

- *Type:* *string

---

##### `TpspDiskEncrypted`<sup>Required</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted"></a>

```go
func TpspDiskEncrypted() interface{}
```

- *Type:* interface{}

---

##### `TpspKeyTrustLevel`<sup>Required</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel"></a>

```go
func TpspKeyTrustLevel() *string
```

- *Type:* *string

---

##### `TpspOsFirewall`<sup>Required</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall"></a>

```go
func TpspOsFirewall() interface{}
```

- *Type:* interface{}

---

##### `TpspOsVersion`<sup>Required</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion"></a>

```go
func TpspOsVersion() *string
```

- *Type:* *string

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger"></a>

```go
func TpspPasswordProctectionWarningTrigger() *string
```

- *Type:* *string

---

##### `TpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode"></a>

```go
func TpspRealtimeUrlCheckMode() interface{}
```

- *Type:* interface{}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel"></a>

```go
func TpspSafeBrowsingProtectionLevel() *string
```

- *Type:* *string

---

##### `TpspScreenLockSecured`<sup>Required</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured"></a>

```go
func TpspScreenLockSecured() interface{}
```

- *Type:* interface{}

---

##### `TpspSecureBootEnabled`<sup>Required</sup> <a name="TpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled"></a>

```go
func TpspSecureBootEnabled() interface{}
```

- *Type:* interface{}

---

##### `TpspSiteIsolationEnabled`<sup>Required</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled"></a>

```go
func TpspSiteIsolationEnabled() interface{}
```

- *Type:* interface{}

---

##### `TpspThirdPartyBlockingEnabled`<sup>Required</sup> <a name="TpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled"></a>

```go
func TpspThirdPartyBlockingEnabled() interface{}
```

- *Type:* interface{}

---

##### `TpspWindowsMachineDomain`<sup>Required</sup> <a name="TpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain"></a>

```go
func TpspWindowsMachineDomain() *string
```

- *Type:* *string

---

##### `TpspWindowsUserDomain`<sup>Required</sup> <a name="TpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain"></a>

```go
func TpspWindowsUserDomain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceWindowsConfig <a name="PolicyDeviceAssuranceWindowsConfig" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policydeviceassurancewindows"

&policydeviceassurancewindows.PolicyDeviceAssuranceWindowsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DiskEncryptionType: *[]*string,
	OsVersion: *string,
	ScreenlockType: *[]*string,
	SecureHardwarePresent: interface{},
	ThirdPartySignalProviders: interface{},
	TpspBrowserVersion: *string,
	TpspBuiltinDnsClientEnabled: interface{},
	TpspChromeRemoteDesktopAppBlocked: interface{},
	TpspCrowdStrikeAgentId: *string,
	TpspCrowdStrikeCustomerId: *string,
	TpspDeviceEnrollmentDomain: *string,
	TpspDiskEncrypted: interface{},
	TpspKeyTrustLevel: *string,
	TpspOsFirewall: interface{},
	TpspOsVersion: *string,
	TpspPasswordProctectionWarningTrigger: *string,
	TpspRealtimeUrlCheckMode: interface{},
	TpspSafeBrowsingProtectionLevel: *string,
	TpspScreenLockSecured: interface{},
	TpspSecureBootEnabled: interface{},
	TpspSiteIsolationEnabled: interface{},
	TpspThirdPartyBlockingEnabled: interface{},
	TpspWindowsMachineDomain: *string,
	TpspWindowsUserDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name">Name</a></code> | <code>*string</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>*[]*string</code> | List of disk encryption type, can be ALL_INTERNAL_VOLUMES. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion">OsVersion</a></code> | <code>*string</code> | The device os minimum version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType">ScreenlockType</a></code> | <code>*[]*string</code> | List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>interface{}</code> | Indicates if the device constains a secure hardware functionality. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>interface{}</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>*string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>interface{}</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>interface{}</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId">TpspCrowdStrikeAgentId</a></code> | <code>*string</code> | Third party signal provider crowdstrike agent id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId">TpspCrowdStrikeCustomerId</a></code> | <code>*string</code> | Third party signal provider crowdstrike user id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>*string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>interface{}</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>*string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>interface{}</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion">TpspOsVersion</a></code> | <code>*string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>*string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>interface{}</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>*string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>interface{}</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled">TpspSecureBootEnabled</a></code> | <code>interface{}</code> | Third party signal provider secure boot enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>interface{}</code> | Third party signal provider site isolation enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled">TpspThirdPartyBlockingEnabled</a></code> | <code>interface{}</code> | Third party signal provider third party blocking enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain">TpspWindowsMachineDomain</a></code> | <code>*string</code> | Third party signal provider windows machine domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain">TpspWindowsUserDomain</a></code> | <code>*string</code> | Third party signal provider windows user domain. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}

---

##### `DiskEncryptionType`<sup>Optional</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType"></a>

```go
DiskEncryptionType *[]*string
```

- *Type:* *[]*string

List of disk encryption type, can be ALL_INTERNAL_VOLUMES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion"></a>

```go
OsVersion *string
```

- *Type:* *string

The device os minimum version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}

---

##### `ScreenlockType`<sup>Optional</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType"></a>

```go
ScreenlockType *[]*string
```

- *Type:* *[]*string

List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}

---

##### `SecureHardwarePresent`<sup>Optional</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent"></a>

```go
SecureHardwarePresent interface{}
```

- *Type:* interface{}

Indicates if the device constains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}

---

##### `ThirdPartySignalProviders`<sup>Optional</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders"></a>

```go
ThirdPartySignalProviders interface{}
```

- *Type:* interface{}

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}

---

##### `TpspBrowserVersion`<sup>Optional</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion"></a>

```go
TpspBrowserVersion *string
```

- *Type:* *string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}

---

##### `TpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled"></a>

```go
TpspBuiltinDnsClientEnabled interface{}
```

- *Type:* interface{}

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```go
TpspChromeRemoteDesktopAppBlocked interface{}
```

- *Type:* interface{}

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}

---

##### `TpspCrowdStrikeAgentId`<sup>Optional</sup> <a name="TpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId"></a>

```go
TpspCrowdStrikeAgentId *string
```

- *Type:* *string

Third party signal provider crowdstrike agent id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}

---

##### `TpspCrowdStrikeCustomerId`<sup>Optional</sup> <a name="TpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId"></a>

```go
TpspCrowdStrikeCustomerId *string
```

- *Type:* *string

Third party signal provider crowdstrike user id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}

---

##### `TpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain"></a>

```go
TpspDeviceEnrollmentDomain *string
```

- *Type:* *string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}

---

##### `TpspDiskEncrypted`<sup>Optional</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted"></a>

```go
TpspDiskEncrypted interface{}
```

- *Type:* interface{}

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}

---

##### `TpspKeyTrustLevel`<sup>Optional</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel"></a>

```go
TpspKeyTrustLevel *string
```

- *Type:* *string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}

---

##### `TpspOsFirewall`<sup>Optional</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall"></a>

```go
TpspOsFirewall interface{}
```

- *Type:* interface{}

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}

---

##### `TpspOsVersion`<sup>Optional</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion"></a>

```go
TpspOsVersion *string
```

- *Type:* *string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```go
TpspPasswordProctectionWarningTrigger *string
```

- *Type:* *string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}

---

##### `TpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode"></a>

```go
TpspRealtimeUrlCheckMode interface{}
```

- *Type:* interface{}

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```go
TpspSafeBrowsingProtectionLevel *string
```

- *Type:* *string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}

---

##### `TpspScreenLockSecured`<sup>Optional</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured"></a>

```go
TpspScreenLockSecured interface{}
```

- *Type:* interface{}

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}

---

##### `TpspSecureBootEnabled`<sup>Optional</sup> <a name="TpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled"></a>

```go
TpspSecureBootEnabled interface{}
```

- *Type:* interface{}

Third party signal provider secure boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}

---

##### `TpspSiteIsolationEnabled`<sup>Optional</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled"></a>

```go
TpspSiteIsolationEnabled interface{}
```

- *Type:* interface{}

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}

---

##### `TpspThirdPartyBlockingEnabled`<sup>Optional</sup> <a name="TpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled"></a>

```go
TpspThirdPartyBlockingEnabled interface{}
```

- *Type:* interface{}

Third party signal provider third party blocking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}

---

##### `TpspWindowsMachineDomain`<sup>Optional</sup> <a name="TpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain"></a>

```go
TpspWindowsMachineDomain *string
```

- *Type:* *string

Third party signal provider windows machine domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}

---

##### `TpspWindowsUserDomain`<sup>Optional</sup> <a name="TpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain"></a>

```go
TpspWindowsUserDomain *string
```

- *Type:* *string

Third party signal provider windows user domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}

---



