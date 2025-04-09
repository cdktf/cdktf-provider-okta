# `policyDeviceAssuranceMacos` Submodule <a name="`policyDeviceAssuranceMacos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceMacos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceMacos <a name="PolicyDeviceAssuranceMacos" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos okta_policy_device_assurance_macos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policydeviceassurancemacos"

policydeviceassurancemacos.NewPolicyDeviceAssuranceMacos(scope Construct, id *string, config PolicyDeviceAssuranceMacosConfig) PolicyDeviceAssuranceMacos
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig">PolicyDeviceAssuranceMacosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig">PolicyDeviceAssuranceMacosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType">ResetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion">ResetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType">ResetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent">ResetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders">ResetThirdPartySignalProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion">ResetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled">ResetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked">ResetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain">ResetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted">ResetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel">ResetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall">ResetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion">ResetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger">ResetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode">ResetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel">ResetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured">ResetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled">ResetTpspSiteIsolationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDiskEncryptionType` <a name="ResetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType"></a>

```go
func ResetDiskEncryptionType()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion"></a>

```go
func ResetOsVersion()
```

##### `ResetScreenlockType` <a name="ResetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType"></a>

```go
func ResetScreenlockType()
```

##### `ResetSecureHardwarePresent` <a name="ResetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent"></a>

```go
func ResetSecureHardwarePresent()
```

##### `ResetThirdPartySignalProviders` <a name="ResetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders"></a>

```go
func ResetThirdPartySignalProviders()
```

##### `ResetTpspBrowserVersion` <a name="ResetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion"></a>

```go
func ResetTpspBrowserVersion()
```

##### `ResetTpspBuiltinDnsClientEnabled` <a name="ResetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled"></a>

```go
func ResetTpspBuiltinDnsClientEnabled()
```

##### `ResetTpspChromeRemoteDesktopAppBlocked` <a name="ResetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```go
func ResetTpspChromeRemoteDesktopAppBlocked()
```

##### `ResetTpspDeviceEnrollmentDomain` <a name="ResetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain"></a>

```go
func ResetTpspDeviceEnrollmentDomain()
```

##### `ResetTpspDiskEncrypted` <a name="ResetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted"></a>

```go
func ResetTpspDiskEncrypted()
```

##### `ResetTpspKeyTrustLevel` <a name="ResetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel"></a>

```go
func ResetTpspKeyTrustLevel()
```

##### `ResetTpspOsFirewall` <a name="ResetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall"></a>

```go
func ResetTpspOsFirewall()
```

##### `ResetTpspOsVersion` <a name="ResetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion"></a>

```go
func ResetTpspOsVersion()
```

##### `ResetTpspPasswordProctectionWarningTrigger` <a name="ResetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger"></a>

```go
func ResetTpspPasswordProctectionWarningTrigger()
```

##### `ResetTpspRealtimeUrlCheckMode` <a name="ResetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode"></a>

```go
func ResetTpspRealtimeUrlCheckMode()
```

##### `ResetTpspSafeBrowsingProtectionLevel` <a name="ResetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel"></a>

```go
func ResetTpspSafeBrowsingProtectionLevel()
```

##### `ResetTpspScreenLockSecured` <a name="ResetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured"></a>

```go
func ResetTpspScreenLockSecured()
```

##### `ResetTpspSiteIsolationEnabled` <a name="ResetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled"></a>

```go
func ResetTpspSiteIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policydeviceassurancemacos"

policydeviceassurancemacos.PolicyDeviceAssuranceMacos_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policydeviceassurancemacos"

policydeviceassurancemacos.PolicyDeviceAssuranceMacos_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policydeviceassurancemacos"

policydeviceassurancemacos.PolicyDeviceAssuranceMacos_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policydeviceassurancemacos"

policydeviceassurancemacos.PolicyDeviceAssuranceMacos_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicyDeviceAssuranceMacos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicyDeviceAssuranceMacos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceMacos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate">LastUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput">DiskEncryptionTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput">OsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput">ScreenlockTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput">SecureHardwarePresentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput">ThirdPartySignalProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput">TpspBrowserVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput">TpspBuiltinDnsClientEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput">TpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput">TpspDeviceEnrollmentDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput">TpspDiskEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput">TpspKeyTrustLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput">TpspOsFirewallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput">TpspOsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput">TpspPasswordProctectionWarningTriggerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput">TpspRealtimeUrlCheckModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput">TpspSafeBrowsingProtectionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput">TpspScreenLockSecuredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput">TpspSiteIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType">ScreenlockType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion">TpspOsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate"></a>

```go
func LastUpdate() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `DiskEncryptionTypeInput`<sup>Optional</sup> <a name="DiskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput"></a>

```go
func DiskEncryptionTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput"></a>

```go
func OsVersionInput() *string
```

- *Type:* *string

---

##### `ScreenlockTypeInput`<sup>Optional</sup> <a name="ScreenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput"></a>

```go
func ScreenlockTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecureHardwarePresentInput`<sup>Optional</sup> <a name="SecureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput"></a>

```go
func SecureHardwarePresentInput() interface{}
```

- *Type:* interface{}

---

##### `ThirdPartySignalProvidersInput`<sup>Optional</sup> <a name="ThirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput"></a>

```go
func ThirdPartySignalProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `TpspBrowserVersionInput`<sup>Optional</sup> <a name="TpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput"></a>

```go
func TpspBrowserVersionInput() *string
```

- *Type:* *string

---

##### `TpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput"></a>

```go
func TpspBuiltinDnsClientEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```go
func TpspChromeRemoteDesktopAppBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `TpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput"></a>

```go
func TpspDeviceEnrollmentDomainInput() *string
```

- *Type:* *string

---

##### `TpspDiskEncryptedInput`<sup>Optional</sup> <a name="TpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput"></a>

```go
func TpspDiskEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `TpspKeyTrustLevelInput`<sup>Optional</sup> <a name="TpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput"></a>

```go
func TpspKeyTrustLevelInput() *string
```

- *Type:* *string

---

##### `TpspOsFirewallInput`<sup>Optional</sup> <a name="TpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput"></a>

```go
func TpspOsFirewallInput() interface{}
```

- *Type:* interface{}

---

##### `TpspOsVersionInput`<sup>Optional</sup> <a name="TpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput"></a>

```go
func TpspOsVersionInput() *string
```

- *Type:* *string

---

##### `TpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```go
func TpspPasswordProctectionWarningTriggerInput() *string
```

- *Type:* *string

---

##### `TpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput"></a>

```go
func TpspRealtimeUrlCheckModeInput() interface{}
```

- *Type:* interface{}

---

##### `TpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```go
func TpspSafeBrowsingProtectionLevelInput() *string
```

- *Type:* *string

---

##### `TpspScreenLockSecuredInput`<sup>Optional</sup> <a name="TpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput"></a>

```go
func TpspScreenLockSecuredInput() interface{}
```

- *Type:* interface{}

---

##### `TpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="TpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput"></a>

```go
func TpspSiteIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiskEncryptionType`<sup>Required</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType"></a>

```go
func DiskEncryptionType() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `ScreenlockType`<sup>Required</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType"></a>

```go
func ScreenlockType() *[]*string
```

- *Type:* *[]*string

---

##### `SecureHardwarePresent`<sup>Required</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent"></a>

```go
func SecureHardwarePresent() interface{}
```

- *Type:* interface{}

---

##### `ThirdPartySignalProviders`<sup>Required</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders"></a>

```go
func ThirdPartySignalProviders() interface{}
```

- *Type:* interface{}

---

##### `TpspBrowserVersion`<sup>Required</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion"></a>

```go
func TpspBrowserVersion() *string
```

- *Type:* *string

---

##### `TpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled"></a>

```go
func TpspBuiltinDnsClientEnabled() interface{}
```

- *Type:* interface{}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```go
func TpspChromeRemoteDesktopAppBlocked() interface{}
```

- *Type:* interface{}

---

##### `TpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain"></a>

```go
func TpspDeviceEnrollmentDomain() *string
```

- *Type:* *string

---

##### `TpspDiskEncrypted`<sup>Required</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted"></a>

```go
func TpspDiskEncrypted() interface{}
```

- *Type:* interface{}

---

##### `TpspKeyTrustLevel`<sup>Required</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel"></a>

```go
func TpspKeyTrustLevel() *string
```

- *Type:* *string

---

##### `TpspOsFirewall`<sup>Required</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall"></a>

```go
func TpspOsFirewall() interface{}
```

- *Type:* interface{}

---

##### `TpspOsVersion`<sup>Required</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion"></a>

```go
func TpspOsVersion() *string
```

- *Type:* *string

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger"></a>

```go
func TpspPasswordProctectionWarningTrigger() *string
```

- *Type:* *string

---

##### `TpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode"></a>

```go
func TpspRealtimeUrlCheckMode() interface{}
```

- *Type:* interface{}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel"></a>

```go
func TpspSafeBrowsingProtectionLevel() *string
```

- *Type:* *string

---

##### `TpspScreenLockSecured`<sup>Required</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured"></a>

```go
func TpspScreenLockSecured() interface{}
```

- *Type:* interface{}

---

##### `TpspSiteIsolationEnabled`<sup>Required</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled"></a>

```go
func TpspSiteIsolationEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceMacosConfig <a name="PolicyDeviceAssuranceMacosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policydeviceassurancemacos"

&policydeviceassurancemacos.PolicyDeviceAssuranceMacosConfig {
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
	TpspDeviceEnrollmentDomain: *string,
	TpspDiskEncrypted: interface{},
	TpspKeyTrustLevel: *string,
	TpspOsFirewall: interface{},
	TpspOsVersion: *string,
	TpspPasswordProctectionWarningTrigger: *string,
	TpspRealtimeUrlCheckMode: interface{},
	TpspSafeBrowsingProtectionLevel: *string,
	TpspScreenLockSecured: interface{},
	TpspSiteIsolationEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name">Name</a></code> | <code>*string</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>*[]*string</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion">OsVersion</a></code> | <code>*string</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType">ScreenlockType</a></code> | <code>*[]*string</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>interface{}</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>interface{}</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>*string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>interface{}</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>interface{}</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>*string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>interface{}</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>*string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>interface{}</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion">TpspOsVersion</a></code> | <code>*string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>*string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>interface{}</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>*string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>interface{}</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>interface{}</code> | Third party signal provider site isolation enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#name PolicyDeviceAssuranceMacos#name}

---

##### `DiskEncryptionType`<sup>Optional</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType"></a>

```go
DiskEncryptionType *[]*string
```

- *Type:* *[]*string

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#disk_encryption_type PolicyDeviceAssuranceMacos#disk_encryption_type}

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion"></a>

```go
OsVersion *string
```

- *Type:* *string

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#os_version PolicyDeviceAssuranceMacos#os_version}

---

##### `ScreenlockType`<sup>Optional</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType"></a>

```go
ScreenlockType *[]*string
```

- *Type:* *[]*string

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#screenlock_type PolicyDeviceAssuranceMacos#screenlock_type}

---

##### `SecureHardwarePresent`<sup>Optional</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent"></a>

```go
SecureHardwarePresent interface{}
```

- *Type:* interface{}

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#secure_hardware_present PolicyDeviceAssuranceMacos#secure_hardware_present}

---

##### `ThirdPartySignalProviders`<sup>Optional</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders"></a>

```go
ThirdPartySignalProviders interface{}
```

- *Type:* interface{}

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#third_party_signal_providers PolicyDeviceAssuranceMacos#third_party_signal_providers}

---

##### `TpspBrowserVersion`<sup>Optional</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion"></a>

```go
TpspBrowserVersion *string
```

- *Type:* *string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_browser_version PolicyDeviceAssuranceMacos#tpsp_browser_version}

---

##### `TpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```go
TpspBuiltinDnsClientEnabled interface{}
```

- *Type:* interface{}

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceMacos#tpsp_builtin_dns_client_enabled}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```go
TpspChromeRemoteDesktopAppBlocked interface{}
```

- *Type:* interface{}

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceMacos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `TpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain"></a>

```go
TpspDeviceEnrollmentDomain *string
```

- *Type:* *string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_device_enrollment_domain PolicyDeviceAssuranceMacos#tpsp_device_enrollment_domain}

---

##### `TpspDiskEncrypted`<sup>Optional</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted"></a>

```go
TpspDiskEncrypted interface{}
```

- *Type:* interface{}

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_disk_encrypted PolicyDeviceAssuranceMacos#tpsp_disk_encrypted}

---

##### `TpspKeyTrustLevel`<sup>Optional</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel"></a>

```go
TpspKeyTrustLevel *string
```

- *Type:* *string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_key_trust_level PolicyDeviceAssuranceMacos#tpsp_key_trust_level}

---

##### `TpspOsFirewall`<sup>Optional</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall"></a>

```go
TpspOsFirewall interface{}
```

- *Type:* interface{}

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_os_firewall PolicyDeviceAssuranceMacos#tpsp_os_firewall}

---

##### `TpspOsVersion`<sup>Optional</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion"></a>

```go
TpspOsVersion *string
```

- *Type:* *string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_os_version PolicyDeviceAssuranceMacos#tpsp_os_version}

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```go
TpspPasswordProctectionWarningTrigger *string
```

- *Type:* *string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceMacos#tpsp_password_proctection_warning_trigger}

---

##### `TpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode"></a>

```go
TpspRealtimeUrlCheckMode interface{}
```

- *Type:* interface{}

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceMacos#tpsp_realtime_url_check_mode}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```go
TpspSafeBrowsingProtectionLevel *string
```

- *Type:* *string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceMacos#tpsp_safe_browsing_protection_level}

---

##### `TpspScreenLockSecured`<sup>Optional</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured"></a>

```go
TpspScreenLockSecured interface{}
```

- *Type:* interface{}

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_screen_lock_secured PolicyDeviceAssuranceMacos#tpsp_screen_lock_secured}

---

##### `TpspSiteIsolationEnabled`<sup>Optional</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled"></a>

```go
TpspSiteIsolationEnabled interface{}
```

- *Type:* interface{}

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/policy_device_assurance_macos#tpsp_site_isolation_enabled PolicyDeviceAssuranceMacos#tpsp_site_isolation_enabled}

---



