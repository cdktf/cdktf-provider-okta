# `okta_policy_device_assurance_chromeos`

Refer to the Terraform Registory for docs: [`okta_policy_device_assurance_chromeos`](https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos).

# `policyDeviceAssuranceChromeos` Submodule <a name="`policyDeviceAssuranceChromeos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceChromeos <a name="PolicyDeviceAssuranceChromeos" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos okta_policy_device_assurance_chromeos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/policydeviceassurancechromeos"

policydeviceassurancechromeos.NewPolicyDeviceAssuranceChromeos(scope Construct, id *string, config PolicyDeviceAssuranceChromeosConfig) PolicyDeviceAssuranceChromeos
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig">PolicyDeviceAssuranceChromeosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig">PolicyDeviceAssuranceChromeosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspAllowScreenLock">ResetTpspAllowScreenLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBrowserVersion">ResetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBuiltinDnsClientEnabled">ResetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspChromeRemoteDesktopAppBlocked">ResetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDeviceEnrollmentDomain">ResetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDiskEncrypted">ResetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspKeyTrustLevel">ResetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsFirewall">ResetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsVersion">ResetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspPasswordProctectionWarningTrigger">ResetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspRealtimeUrlCheckMode">ResetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSafeBrowsingProtectionLevel">ResetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspScreenLockSecured">ResetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSiteIsolationEnabled">ResetTpspSiteIsolationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetTpspAllowScreenLock` <a name="ResetTpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspAllowScreenLock"></a>

```go
func ResetTpspAllowScreenLock()
```

##### `ResetTpspBrowserVersion` <a name="ResetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBrowserVersion"></a>

```go
func ResetTpspBrowserVersion()
```

##### `ResetTpspBuiltinDnsClientEnabled` <a name="ResetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBuiltinDnsClientEnabled"></a>

```go
func ResetTpspBuiltinDnsClientEnabled()
```

##### `ResetTpspChromeRemoteDesktopAppBlocked` <a name="ResetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```go
func ResetTpspChromeRemoteDesktopAppBlocked()
```

##### `ResetTpspDeviceEnrollmentDomain` <a name="ResetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDeviceEnrollmentDomain"></a>

```go
func ResetTpspDeviceEnrollmentDomain()
```

##### `ResetTpspDiskEncrypted` <a name="ResetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDiskEncrypted"></a>

```go
func ResetTpspDiskEncrypted()
```

##### `ResetTpspKeyTrustLevel` <a name="ResetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspKeyTrustLevel"></a>

```go
func ResetTpspKeyTrustLevel()
```

##### `ResetTpspOsFirewall` <a name="ResetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsFirewall"></a>

```go
func ResetTpspOsFirewall()
```

##### `ResetTpspOsVersion` <a name="ResetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsVersion"></a>

```go
func ResetTpspOsVersion()
```

##### `ResetTpspPasswordProctectionWarningTrigger` <a name="ResetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspPasswordProctectionWarningTrigger"></a>

```go
func ResetTpspPasswordProctectionWarningTrigger()
```

##### `ResetTpspRealtimeUrlCheckMode` <a name="ResetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspRealtimeUrlCheckMode"></a>

```go
func ResetTpspRealtimeUrlCheckMode()
```

##### `ResetTpspSafeBrowsingProtectionLevel` <a name="ResetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSafeBrowsingProtectionLevel"></a>

```go
func ResetTpspSafeBrowsingProtectionLevel()
```

##### `ResetTpspScreenLockSecured` <a name="ResetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspScreenLockSecured"></a>

```go
func ResetTpspScreenLockSecured()
```

##### `ResetTpspSiteIsolationEnabled` <a name="ResetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSiteIsolationEnabled"></a>

```go
func ResetTpspSiteIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceChromeos resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/policydeviceassurancechromeos"

policydeviceassurancechromeos.PolicyDeviceAssuranceChromeos_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/policydeviceassurancechromeos"

policydeviceassurancechromeos.PolicyDeviceAssuranceChromeos_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/policydeviceassurancechromeos"

policydeviceassurancechromeos.PolicyDeviceAssuranceChromeos_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/policydeviceassurancechromeos"

policydeviceassurancechromeos.PolicyDeviceAssuranceChromeos_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicyDeviceAssuranceChromeos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicyDeviceAssuranceChromeos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicyDeviceAssuranceChromeos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceChromeos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdate">LastUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLockInput">TpspAllowScreenLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersionInput">TpspBrowserVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabledInput">TpspBuiltinDnsClientEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlockedInput">TpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomainInput">TpspDeviceEnrollmentDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncryptedInput">TpspDiskEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevelInput">TpspKeyTrustLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewallInput">TpspOsFirewallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersionInput">TpspOsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTriggerInput">TpspPasswordProctectionWarningTriggerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckModeInput">TpspRealtimeUrlCheckModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevelInput">TpspSafeBrowsingProtectionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecuredInput">TpspScreenLockSecuredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabledInput">TpspSiteIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLock">TpspAllowScreenLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersion">TpspOsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdate"></a>

```go
func LastUpdate() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TpspAllowScreenLockInput`<sup>Optional</sup> <a name="TpspAllowScreenLockInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLockInput"></a>

```go
func TpspAllowScreenLockInput() interface{}
```

- *Type:* interface{}

---

##### `TpspBrowserVersionInput`<sup>Optional</sup> <a name="TpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersionInput"></a>

```go
func TpspBrowserVersionInput() *string
```

- *Type:* *string

---

##### `TpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabledInput"></a>

```go
func TpspBuiltinDnsClientEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```go
func TpspChromeRemoteDesktopAppBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `TpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomainInput"></a>

```go
func TpspDeviceEnrollmentDomainInput() *string
```

- *Type:* *string

---

##### `TpspDiskEncryptedInput`<sup>Optional</sup> <a name="TpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncryptedInput"></a>

```go
func TpspDiskEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `TpspKeyTrustLevelInput`<sup>Optional</sup> <a name="TpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevelInput"></a>

```go
func TpspKeyTrustLevelInput() *string
```

- *Type:* *string

---

##### `TpspOsFirewallInput`<sup>Optional</sup> <a name="TpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewallInput"></a>

```go
func TpspOsFirewallInput() interface{}
```

- *Type:* interface{}

---

##### `TpspOsVersionInput`<sup>Optional</sup> <a name="TpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersionInput"></a>

```go
func TpspOsVersionInput() *string
```

- *Type:* *string

---

##### `TpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```go
func TpspPasswordProctectionWarningTriggerInput() *string
```

- *Type:* *string

---

##### `TpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckModeInput"></a>

```go
func TpspRealtimeUrlCheckModeInput() interface{}
```

- *Type:* interface{}

---

##### `TpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```go
func TpspSafeBrowsingProtectionLevelInput() *string
```

- *Type:* *string

---

##### `TpspScreenLockSecuredInput`<sup>Optional</sup> <a name="TpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecuredInput"></a>

```go
func TpspScreenLockSecuredInput() interface{}
```

- *Type:* interface{}

---

##### `TpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="TpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabledInput"></a>

```go
func TpspSiteIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TpspAllowScreenLock`<sup>Required</sup> <a name="TpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLock"></a>

```go
func TpspAllowScreenLock() interface{}
```

- *Type:* interface{}

---

##### `TpspBrowserVersion`<sup>Required</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersion"></a>

```go
func TpspBrowserVersion() *string
```

- *Type:* *string

---

##### `TpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabled"></a>

```go
func TpspBuiltinDnsClientEnabled() interface{}
```

- *Type:* interface{}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```go
func TpspChromeRemoteDesktopAppBlocked() interface{}
```

- *Type:* interface{}

---

##### `TpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomain"></a>

```go
func TpspDeviceEnrollmentDomain() *string
```

- *Type:* *string

---

##### `TpspDiskEncrypted`<sup>Required</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncrypted"></a>

```go
func TpspDiskEncrypted() interface{}
```

- *Type:* interface{}

---

##### `TpspKeyTrustLevel`<sup>Required</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevel"></a>

```go
func TpspKeyTrustLevel() *string
```

- *Type:* *string

---

##### `TpspOsFirewall`<sup>Required</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewall"></a>

```go
func TpspOsFirewall() interface{}
```

- *Type:* interface{}

---

##### `TpspOsVersion`<sup>Required</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersion"></a>

```go
func TpspOsVersion() *string
```

- *Type:* *string

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTrigger"></a>

```go
func TpspPasswordProctectionWarningTrigger() *string
```

- *Type:* *string

---

##### `TpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckMode"></a>

```go
func TpspRealtimeUrlCheckMode() interface{}
```

- *Type:* interface{}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevel"></a>

```go
func TpspSafeBrowsingProtectionLevel() *string
```

- *Type:* *string

---

##### `TpspScreenLockSecured`<sup>Required</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecured"></a>

```go
func TpspScreenLockSecured() interface{}
```

- *Type:* interface{}

---

##### `TpspSiteIsolationEnabled`<sup>Required</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabled"></a>

```go
func TpspSiteIsolationEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceChromeosConfig <a name="PolicyDeviceAssuranceChromeosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/policydeviceassurancechromeos"

&policydeviceassurancechromeos.PolicyDeviceAssuranceChromeosConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TpspAllowScreenLock: interface{},
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
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.name">Name</a></code> | <code>*string</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspAllowScreenLock">TpspAllowScreenLock</a></code> | <code>interface{}</code> | Third party signal provider allow screen lock. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>*string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>interface{}</code> | Third party signal provider builtin dns client enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>interface{}</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>*string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>interface{}</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>*string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>interface{}</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsVersion">TpspOsVersion</a></code> | <code>*string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>*string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>interface{}</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>*string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>interface{}</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>interface{}</code> | Third party signal provider site isolation enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#name PolicyDeviceAssuranceChromeos#name}

---

##### `TpspAllowScreenLock`<sup>Optional</sup> <a name="TpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspAllowScreenLock"></a>

```go
TpspAllowScreenLock interface{}
```

- *Type:* interface{}

Third party signal provider allow screen lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_allow_screen_lock PolicyDeviceAssuranceChromeos#tpsp_allow_screen_lock}

---

##### `TpspBrowserVersion`<sup>Optional</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBrowserVersion"></a>

```go
TpspBrowserVersion *string
```

- *Type:* *string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_browser_version PolicyDeviceAssuranceChromeos#tpsp_browser_version}

---

##### `TpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```go
TpspBuiltinDnsClientEnabled interface{}
```

- *Type:* interface{}

Third party signal provider builtin dns client enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceChromeos#tpsp_builtin_dns_client_enabled}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```go
TpspChromeRemoteDesktopAppBlocked interface{}
```

- *Type:* interface{}

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceChromeos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `TpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDeviceEnrollmentDomain"></a>

```go
TpspDeviceEnrollmentDomain *string
```

- *Type:* *string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_device_enrollment_domain PolicyDeviceAssuranceChromeos#tpsp_device_enrollment_domain}

---

##### `TpspDiskEncrypted`<sup>Optional</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDiskEncrypted"></a>

```go
TpspDiskEncrypted interface{}
```

- *Type:* interface{}

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_disk_encrypted PolicyDeviceAssuranceChromeos#tpsp_disk_encrypted}

---

##### `TpspKeyTrustLevel`<sup>Optional</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspKeyTrustLevel"></a>

```go
TpspKeyTrustLevel *string
```

- *Type:* *string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_key_trust_level PolicyDeviceAssuranceChromeos#tpsp_key_trust_level}

---

##### `TpspOsFirewall`<sup>Optional</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsFirewall"></a>

```go
TpspOsFirewall interface{}
```

- *Type:* interface{}

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_os_firewall PolicyDeviceAssuranceChromeos#tpsp_os_firewall}

---

##### `TpspOsVersion`<sup>Optional</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsVersion"></a>

```go
TpspOsVersion *string
```

- *Type:* *string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_os_version PolicyDeviceAssuranceChromeos#tpsp_os_version}

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```go
TpspPasswordProctectionWarningTrigger *string
```

- *Type:* *string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceChromeos#tpsp_password_proctection_warning_trigger}

---

##### `TpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspRealtimeUrlCheckMode"></a>

```go
TpspRealtimeUrlCheckMode interface{}
```

- *Type:* interface{}

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceChromeos#tpsp_realtime_url_check_mode}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```go
TpspSafeBrowsingProtectionLevel *string
```

- *Type:* *string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceChromeos#tpsp_safe_browsing_protection_level}

---

##### `TpspScreenLockSecured`<sup>Optional</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspScreenLockSecured"></a>

```go
TpspScreenLockSecured interface{}
```

- *Type:* interface{}

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_screen_lock_secured PolicyDeviceAssuranceChromeos#tpsp_screen_lock_secured}

---

##### `TpspSiteIsolationEnabled`<sup>Optional</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSiteIsolationEnabled"></a>

```go
TpspSiteIsolationEnabled interface{}
```

- *Type:* interface{}

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_device_assurance_chromeos#tpsp_site_isolation_enabled PolicyDeviceAssuranceChromeos#tpsp_site_isolation_enabled}

---



