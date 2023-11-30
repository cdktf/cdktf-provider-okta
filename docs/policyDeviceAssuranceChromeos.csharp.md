# `policyDeviceAssuranceChromeos` Submodule <a name="`policyDeviceAssuranceChromeos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceChromeos <a name="PolicyDeviceAssuranceChromeos" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos okta_policy_device_assurance_chromeos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceChromeos(Construct Scope, string Id, PolicyDeviceAssuranceChromeosConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig">PolicyDeviceAssuranceChromeosConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetTpspAllowScreenLock` <a name="ResetTpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspAllowScreenLock"></a>

```csharp
private void ResetTpspAllowScreenLock()
```

##### `ResetTpspBrowserVersion` <a name="ResetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBrowserVersion"></a>

```csharp
private void ResetTpspBrowserVersion()
```

##### `ResetTpspBuiltinDnsClientEnabled` <a name="ResetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBuiltinDnsClientEnabled"></a>

```csharp
private void ResetTpspBuiltinDnsClientEnabled()
```

##### `ResetTpspChromeRemoteDesktopAppBlocked` <a name="ResetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```csharp
private void ResetTpspChromeRemoteDesktopAppBlocked()
```

##### `ResetTpspDeviceEnrollmentDomain` <a name="ResetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDeviceEnrollmentDomain"></a>

```csharp
private void ResetTpspDeviceEnrollmentDomain()
```

##### `ResetTpspDiskEncrypted` <a name="ResetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDiskEncrypted"></a>

```csharp
private void ResetTpspDiskEncrypted()
```

##### `ResetTpspKeyTrustLevel` <a name="ResetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspKeyTrustLevel"></a>

```csharp
private void ResetTpspKeyTrustLevel()
```

##### `ResetTpspOsFirewall` <a name="ResetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsFirewall"></a>

```csharp
private void ResetTpspOsFirewall()
```

##### `ResetTpspOsVersion` <a name="ResetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsVersion"></a>

```csharp
private void ResetTpspOsVersion()
```

##### `ResetTpspPasswordProctectionWarningTrigger` <a name="ResetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspPasswordProctectionWarningTrigger"></a>

```csharp
private void ResetTpspPasswordProctectionWarningTrigger()
```

##### `ResetTpspRealtimeUrlCheckMode` <a name="ResetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspRealtimeUrlCheckMode"></a>

```csharp
private void ResetTpspRealtimeUrlCheckMode()
```

##### `ResetTpspSafeBrowsingProtectionLevel` <a name="ResetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSafeBrowsingProtectionLevel"></a>

```csharp
private void ResetTpspSafeBrowsingProtectionLevel()
```

##### `ResetTpspScreenLockSecured` <a name="ResetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspScreenLockSecured"></a>

```csharp
private void ResetTpspScreenLockSecured()
```

##### `ResetTpspSiteIsolationEnabled` <a name="ResetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSiteIsolationEnabled"></a>

```csharp
private void ResetTpspSiteIsolationEnabled()
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

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceChromeos.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceChromeos.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceChromeos.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceChromeos.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyDeviceAssuranceChromeos resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceChromeos to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceChromeos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceChromeos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdate">LastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLockInput">TpspAllowScreenLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersionInput">TpspBrowserVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabledInput">TpspBuiltinDnsClientEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlockedInput">TpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomainInput">TpspDeviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncryptedInput">TpspDiskEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevelInput">TpspKeyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewallInput">TpspOsFirewallInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersionInput">TpspOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTriggerInput">TpspPasswordProctectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckModeInput">TpspRealtimeUrlCheckModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevelInput">TpspSafeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecuredInput">TpspScreenLockSecuredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabledInput">TpspSiteIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLock">TpspAllowScreenLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersion">TpspOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdate"></a>

```csharp
public string LastUpdate { get; }
```

- *Type:* string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TpspAllowScreenLockInput`<sup>Optional</sup> <a name="TpspAllowScreenLockInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLockInput"></a>

```csharp
public object TpspAllowScreenLockInput { get; }
```

- *Type:* object

---

##### `TpspBrowserVersionInput`<sup>Optional</sup> <a name="TpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersionInput"></a>

```csharp
public string TpspBrowserVersionInput { get; }
```

- *Type:* string

---

##### `TpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabledInput"></a>

```csharp
public object TpspBuiltinDnsClientEnabledInput { get; }
```

- *Type:* object

---

##### `TpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlockedInput { get; }
```

- *Type:* object

---

##### `TpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomainInput"></a>

```csharp
public string TpspDeviceEnrollmentDomainInput { get; }
```

- *Type:* string

---

##### `TpspDiskEncryptedInput`<sup>Optional</sup> <a name="TpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncryptedInput"></a>

```csharp
public object TpspDiskEncryptedInput { get; }
```

- *Type:* object

---

##### `TpspKeyTrustLevelInput`<sup>Optional</sup> <a name="TpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevelInput"></a>

```csharp
public string TpspKeyTrustLevelInput { get; }
```

- *Type:* string

---

##### `TpspOsFirewallInput`<sup>Optional</sup> <a name="TpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewallInput"></a>

```csharp
public object TpspOsFirewallInput { get; }
```

- *Type:* object

---

##### `TpspOsVersionInput`<sup>Optional</sup> <a name="TpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersionInput"></a>

```csharp
public string TpspOsVersionInput { get; }
```

- *Type:* string

---

##### `TpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```csharp
public string TpspPasswordProctectionWarningTriggerInput { get; }
```

- *Type:* string

---

##### `TpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckModeInput"></a>

```csharp
public object TpspRealtimeUrlCheckModeInput { get; }
```

- *Type:* object

---

##### `TpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```csharp
public string TpspSafeBrowsingProtectionLevelInput { get; }
```

- *Type:* string

---

##### `TpspScreenLockSecuredInput`<sup>Optional</sup> <a name="TpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecuredInput"></a>

```csharp
public object TpspScreenLockSecuredInput { get; }
```

- *Type:* object

---

##### `TpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="TpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabledInput"></a>

```csharp
public object TpspSiteIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TpspAllowScreenLock`<sup>Required</sup> <a name="TpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLock"></a>

```csharp
public object TpspAllowScreenLock { get; }
```

- *Type:* object

---

##### `TpspBrowserVersion`<sup>Required</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersion"></a>

```csharp
public string TpspBrowserVersion { get; }
```

- *Type:* string

---

##### `TpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabled"></a>

```csharp
public object TpspBuiltinDnsClientEnabled { get; }
```

- *Type:* object

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlocked { get; }
```

- *Type:* object

---

##### `TpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomain"></a>

```csharp
public string TpspDeviceEnrollmentDomain { get; }
```

- *Type:* string

---

##### `TpspDiskEncrypted`<sup>Required</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncrypted"></a>

```csharp
public object TpspDiskEncrypted { get; }
```

- *Type:* object

---

##### `TpspKeyTrustLevel`<sup>Required</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevel"></a>

```csharp
public string TpspKeyTrustLevel { get; }
```

- *Type:* string

---

##### `TpspOsFirewall`<sup>Required</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewall"></a>

```csharp
public object TpspOsFirewall { get; }
```

- *Type:* object

---

##### `TpspOsVersion`<sup>Required</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersion"></a>

```csharp
public string TpspOsVersion { get; }
```

- *Type:* string

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTrigger"></a>

```csharp
public string TpspPasswordProctectionWarningTrigger { get; }
```

- *Type:* string

---

##### `TpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckMode"></a>

```csharp
public object TpspRealtimeUrlCheckMode { get; }
```

- *Type:* object

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevel"></a>

```csharp
public string TpspSafeBrowsingProtectionLevel { get; }
```

- *Type:* string

---

##### `TpspScreenLockSecured`<sup>Required</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecured"></a>

```csharp
public object TpspScreenLockSecured { get; }
```

- *Type:* object

---

##### `TpspSiteIsolationEnabled`<sup>Required</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabled"></a>

```csharp
public object TpspSiteIsolationEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceChromeosConfig <a name="PolicyDeviceAssuranceChromeosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceChromeosConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object TpspAllowScreenLock = null,
    string TpspBrowserVersion = null,
    object TpspBuiltinDnsClientEnabled = null,
    object TpspChromeRemoteDesktopAppBlocked = null,
    string TpspDeviceEnrollmentDomain = null,
    object TpspDiskEncrypted = null,
    string TpspKeyTrustLevel = null,
    object TpspOsFirewall = null,
    string TpspOsVersion = null,
    string TpspPasswordProctectionWarningTrigger = null,
    object TpspRealtimeUrlCheckMode = null,
    string TpspSafeBrowsingProtectionLevel = null,
    object TpspScreenLockSecured = null,
    object TpspSiteIsolationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.name">Name</a></code> | <code>string</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspAllowScreenLock">TpspAllowScreenLock</a></code> | <code>object</code> | Third party signal provider allow screen lock. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>object</code> | Third party signal provider builtin dns client enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>object</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>object</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsVersion">TpspOsVersion</a></code> | <code>string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>object</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>object</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>object</code> | Third party signal provider site isolation enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#name PolicyDeviceAssuranceChromeos#name}

---

##### `TpspAllowScreenLock`<sup>Optional</sup> <a name="TpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspAllowScreenLock"></a>

```csharp
public object TpspAllowScreenLock { get; set; }
```

- *Type:* object

Third party signal provider allow screen lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_allow_screen_lock PolicyDeviceAssuranceChromeos#tpsp_allow_screen_lock}

---

##### `TpspBrowserVersion`<sup>Optional</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBrowserVersion"></a>

```csharp
public string TpspBrowserVersion { get; set; }
```

- *Type:* string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_browser_version PolicyDeviceAssuranceChromeos#tpsp_browser_version}

---

##### `TpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```csharp
public object TpspBuiltinDnsClientEnabled { get; set; }
```

- *Type:* object

Third party signal provider builtin dns client enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceChromeos#tpsp_builtin_dns_client_enabled}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlocked { get; set; }
```

- *Type:* object

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceChromeos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `TpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDeviceEnrollmentDomain"></a>

```csharp
public string TpspDeviceEnrollmentDomain { get; set; }
```

- *Type:* string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_device_enrollment_domain PolicyDeviceAssuranceChromeos#tpsp_device_enrollment_domain}

---

##### `TpspDiskEncrypted`<sup>Optional</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDiskEncrypted"></a>

```csharp
public object TpspDiskEncrypted { get; set; }
```

- *Type:* object

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_disk_encrypted PolicyDeviceAssuranceChromeos#tpsp_disk_encrypted}

---

##### `TpspKeyTrustLevel`<sup>Optional</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspKeyTrustLevel"></a>

```csharp
public string TpspKeyTrustLevel { get; set; }
```

- *Type:* string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_key_trust_level PolicyDeviceAssuranceChromeos#tpsp_key_trust_level}

---

##### `TpspOsFirewall`<sup>Optional</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsFirewall"></a>

```csharp
public object TpspOsFirewall { get; set; }
```

- *Type:* object

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_os_firewall PolicyDeviceAssuranceChromeos#tpsp_os_firewall}

---

##### `TpspOsVersion`<sup>Optional</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsVersion"></a>

```csharp
public string TpspOsVersion { get; set; }
```

- *Type:* string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_os_version PolicyDeviceAssuranceChromeos#tpsp_os_version}

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```csharp
public string TpspPasswordProctectionWarningTrigger { get; set; }
```

- *Type:* string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceChromeos#tpsp_password_proctection_warning_trigger}

---

##### `TpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspRealtimeUrlCheckMode"></a>

```csharp
public object TpspRealtimeUrlCheckMode { get; set; }
```

- *Type:* object

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceChromeos#tpsp_realtime_url_check_mode}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```csharp
public string TpspSafeBrowsingProtectionLevel { get; set; }
```

- *Type:* string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceChromeos#tpsp_safe_browsing_protection_level}

---

##### `TpspScreenLockSecured`<sup>Optional</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspScreenLockSecured"></a>

```csharp
public object TpspScreenLockSecured { get; set; }
```

- *Type:* object

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_screen_lock_secured PolicyDeviceAssuranceChromeos#tpsp_screen_lock_secured}

---

##### `TpspSiteIsolationEnabled`<sup>Optional</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSiteIsolationEnabled"></a>

```csharp
public object TpspSiteIsolationEnabled { get; set; }
```

- *Type:* object

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_device_assurance_chromeos#tpsp_site_isolation_enabled PolicyDeviceAssuranceChromeos#tpsp_site_isolation_enabled}

---



