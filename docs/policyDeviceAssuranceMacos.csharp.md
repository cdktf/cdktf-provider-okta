# `policyDeviceAssuranceMacos` Submodule <a name="`policyDeviceAssuranceMacos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceMacos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceMacos <a name="PolicyDeviceAssuranceMacos" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos okta_policy_device_assurance_macos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceMacos(Construct Scope, string Id, PolicyDeviceAssuranceMacosConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig">PolicyDeviceAssuranceMacosConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDiskEncryptionType` <a name="ResetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType"></a>

```csharp
private void ResetDiskEncryptionType()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion"></a>

```csharp
private void ResetOsVersion()
```

##### `ResetScreenlockType` <a name="ResetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType"></a>

```csharp
private void ResetScreenlockType()
```

##### `ResetSecureHardwarePresent` <a name="ResetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent"></a>

```csharp
private void ResetSecureHardwarePresent()
```

##### `ResetThirdPartySignalProviders` <a name="ResetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders"></a>

```csharp
private void ResetThirdPartySignalProviders()
```

##### `ResetTpspBrowserVersion` <a name="ResetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion"></a>

```csharp
private void ResetTpspBrowserVersion()
```

##### `ResetTpspBuiltinDnsClientEnabled` <a name="ResetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled"></a>

```csharp
private void ResetTpspBuiltinDnsClientEnabled()
```

##### `ResetTpspChromeRemoteDesktopAppBlocked` <a name="ResetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```csharp
private void ResetTpspChromeRemoteDesktopAppBlocked()
```

##### `ResetTpspDeviceEnrollmentDomain` <a name="ResetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain"></a>

```csharp
private void ResetTpspDeviceEnrollmentDomain()
```

##### `ResetTpspDiskEncrypted` <a name="ResetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted"></a>

```csharp
private void ResetTpspDiskEncrypted()
```

##### `ResetTpspKeyTrustLevel` <a name="ResetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel"></a>

```csharp
private void ResetTpspKeyTrustLevel()
```

##### `ResetTpspOsFirewall` <a name="ResetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall"></a>

```csharp
private void ResetTpspOsFirewall()
```

##### `ResetTpspOsVersion` <a name="ResetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion"></a>

```csharp
private void ResetTpspOsVersion()
```

##### `ResetTpspPasswordProctectionWarningTrigger` <a name="ResetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger"></a>

```csharp
private void ResetTpspPasswordProctectionWarningTrigger()
```

##### `ResetTpspRealtimeUrlCheckMode` <a name="ResetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode"></a>

```csharp
private void ResetTpspRealtimeUrlCheckMode()
```

##### `ResetTpspSafeBrowsingProtectionLevel` <a name="ResetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel"></a>

```csharp
private void ResetTpspSafeBrowsingProtectionLevel()
```

##### `ResetTpspScreenLockSecured` <a name="ResetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured"></a>

```csharp
private void ResetTpspScreenLockSecured()
```

##### `ResetTpspSiteIsolationEnabled` <a name="ResetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled"></a>

```csharp
private void ResetTpspSiteIsolationEnabled()
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

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceMacos.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceMacos.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceMacos.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceMacos.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceMacos to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceMacos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceMacos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate">LastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput">DiskEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput">OsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput">ScreenlockTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput">SecureHardwarePresentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput">ThirdPartySignalProvidersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput">TpspBrowserVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput">TpspBuiltinDnsClientEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput">TpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput">TpspDeviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput">TpspDiskEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput">TpspKeyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput">TpspOsFirewallInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput">TpspOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput">TpspPasswordProctectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput">TpspRealtimeUrlCheckModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput">TpspSafeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput">TpspScreenLockSecuredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput">TpspSiteIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType">ScreenlockType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion">TpspOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate"></a>

```csharp
public string LastUpdate { get; }
```

- *Type:* string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `DiskEncryptionTypeInput`<sup>Optional</sup> <a name="DiskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput"></a>

```csharp
public string[] DiskEncryptionTypeInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput"></a>

```csharp
public string OsVersionInput { get; }
```

- *Type:* string

---

##### `ScreenlockTypeInput`<sup>Optional</sup> <a name="ScreenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput"></a>

```csharp
public string[] ScreenlockTypeInput { get; }
```

- *Type:* string[]

---

##### `SecureHardwarePresentInput`<sup>Optional</sup> <a name="SecureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput"></a>

```csharp
public object SecureHardwarePresentInput { get; }
```

- *Type:* object

---

##### `ThirdPartySignalProvidersInput`<sup>Optional</sup> <a name="ThirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput"></a>

```csharp
public object ThirdPartySignalProvidersInput { get; }
```

- *Type:* object

---

##### `TpspBrowserVersionInput`<sup>Optional</sup> <a name="TpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput"></a>

```csharp
public string TpspBrowserVersionInput { get; }
```

- *Type:* string

---

##### `TpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput"></a>

```csharp
public object TpspBuiltinDnsClientEnabledInput { get; }
```

- *Type:* object

---

##### `TpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlockedInput { get; }
```

- *Type:* object

---

##### `TpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput"></a>

```csharp
public string TpspDeviceEnrollmentDomainInput { get; }
```

- *Type:* string

---

##### `TpspDiskEncryptedInput`<sup>Optional</sup> <a name="TpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput"></a>

```csharp
public object TpspDiskEncryptedInput { get; }
```

- *Type:* object

---

##### `TpspKeyTrustLevelInput`<sup>Optional</sup> <a name="TpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput"></a>

```csharp
public string TpspKeyTrustLevelInput { get; }
```

- *Type:* string

---

##### `TpspOsFirewallInput`<sup>Optional</sup> <a name="TpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput"></a>

```csharp
public object TpspOsFirewallInput { get; }
```

- *Type:* object

---

##### `TpspOsVersionInput`<sup>Optional</sup> <a name="TpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput"></a>

```csharp
public string TpspOsVersionInput { get; }
```

- *Type:* string

---

##### `TpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```csharp
public string TpspPasswordProctectionWarningTriggerInput { get; }
```

- *Type:* string

---

##### `TpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput"></a>

```csharp
public object TpspRealtimeUrlCheckModeInput { get; }
```

- *Type:* object

---

##### `TpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```csharp
public string TpspSafeBrowsingProtectionLevelInput { get; }
```

- *Type:* string

---

##### `TpspScreenLockSecuredInput`<sup>Optional</sup> <a name="TpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput"></a>

```csharp
public object TpspScreenLockSecuredInput { get; }
```

- *Type:* object

---

##### `TpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="TpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput"></a>

```csharp
public object TpspSiteIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `DiskEncryptionType`<sup>Required</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType"></a>

```csharp
public string[] DiskEncryptionType { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `ScreenlockType`<sup>Required</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType"></a>

```csharp
public string[] ScreenlockType { get; }
```

- *Type:* string[]

---

##### `SecureHardwarePresent`<sup>Required</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent"></a>

```csharp
public object SecureHardwarePresent { get; }
```

- *Type:* object

---

##### `ThirdPartySignalProviders`<sup>Required</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders"></a>

```csharp
public object ThirdPartySignalProviders { get; }
```

- *Type:* object

---

##### `TpspBrowserVersion`<sup>Required</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion"></a>

```csharp
public string TpspBrowserVersion { get; }
```

- *Type:* string

---

##### `TpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled"></a>

```csharp
public object TpspBuiltinDnsClientEnabled { get; }
```

- *Type:* object

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlocked { get; }
```

- *Type:* object

---

##### `TpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain"></a>

```csharp
public string TpspDeviceEnrollmentDomain { get; }
```

- *Type:* string

---

##### `TpspDiskEncrypted`<sup>Required</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted"></a>

```csharp
public object TpspDiskEncrypted { get; }
```

- *Type:* object

---

##### `TpspKeyTrustLevel`<sup>Required</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel"></a>

```csharp
public string TpspKeyTrustLevel { get; }
```

- *Type:* string

---

##### `TpspOsFirewall`<sup>Required</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall"></a>

```csharp
public object TpspOsFirewall { get; }
```

- *Type:* object

---

##### `TpspOsVersion`<sup>Required</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion"></a>

```csharp
public string TpspOsVersion { get; }
```

- *Type:* string

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger"></a>

```csharp
public string TpspPasswordProctectionWarningTrigger { get; }
```

- *Type:* string

---

##### `TpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode"></a>

```csharp
public object TpspRealtimeUrlCheckMode { get; }
```

- *Type:* object

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel"></a>

```csharp
public string TpspSafeBrowsingProtectionLevel { get; }
```

- *Type:* string

---

##### `TpspScreenLockSecured`<sup>Required</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured"></a>

```csharp
public object TpspScreenLockSecured { get; }
```

- *Type:* object

---

##### `TpspSiteIsolationEnabled`<sup>Required</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled"></a>

```csharp
public object TpspSiteIsolationEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceMacosConfig <a name="PolicyDeviceAssuranceMacosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceMacosConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] DiskEncryptionType = null,
    string OsVersion = null,
    string[] ScreenlockType = null,
    object SecureHardwarePresent = null,
    object ThirdPartySignalProviders = null,
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
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name">Name</a></code> | <code>string</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>string[]</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion">OsVersion</a></code> | <code>string</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType">ScreenlockType</a></code> | <code>string[]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>object</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>object</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>object</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>object</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>object</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion">TpspOsVersion</a></code> | <code>string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>object</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>object</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>object</code> | Third party signal provider site isolation enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#name PolicyDeviceAssuranceMacos#name}

---

##### `DiskEncryptionType`<sup>Optional</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType"></a>

```csharp
public string[] DiskEncryptionType { get; set; }
```

- *Type:* string[]

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#disk_encryption_type PolicyDeviceAssuranceMacos#disk_encryption_type}

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion"></a>

```csharp
public string OsVersion { get; set; }
```

- *Type:* string

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#os_version PolicyDeviceAssuranceMacos#os_version}

---

##### `ScreenlockType`<sup>Optional</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType"></a>

```csharp
public string[] ScreenlockType { get; set; }
```

- *Type:* string[]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#screenlock_type PolicyDeviceAssuranceMacos#screenlock_type}

---

##### `SecureHardwarePresent`<sup>Optional</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent"></a>

```csharp
public object SecureHardwarePresent { get; set; }
```

- *Type:* object

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#secure_hardware_present PolicyDeviceAssuranceMacos#secure_hardware_present}

---

##### `ThirdPartySignalProviders`<sup>Optional</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders"></a>

```csharp
public object ThirdPartySignalProviders { get; set; }
```

- *Type:* object

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#third_party_signal_providers PolicyDeviceAssuranceMacos#third_party_signal_providers}

---

##### `TpspBrowserVersion`<sup>Optional</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion"></a>

```csharp
public string TpspBrowserVersion { get; set; }
```

- *Type:* string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_browser_version PolicyDeviceAssuranceMacos#tpsp_browser_version}

---

##### `TpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```csharp
public object TpspBuiltinDnsClientEnabled { get; set; }
```

- *Type:* object

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceMacos#tpsp_builtin_dns_client_enabled}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlocked { get; set; }
```

- *Type:* object

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceMacos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `TpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain"></a>

```csharp
public string TpspDeviceEnrollmentDomain { get; set; }
```

- *Type:* string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_device_enrollment_domain PolicyDeviceAssuranceMacos#tpsp_device_enrollment_domain}

---

##### `TpspDiskEncrypted`<sup>Optional</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted"></a>

```csharp
public object TpspDiskEncrypted { get; set; }
```

- *Type:* object

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_disk_encrypted PolicyDeviceAssuranceMacos#tpsp_disk_encrypted}

---

##### `TpspKeyTrustLevel`<sup>Optional</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel"></a>

```csharp
public string TpspKeyTrustLevel { get; set; }
```

- *Type:* string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_key_trust_level PolicyDeviceAssuranceMacos#tpsp_key_trust_level}

---

##### `TpspOsFirewall`<sup>Optional</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall"></a>

```csharp
public object TpspOsFirewall { get; set; }
```

- *Type:* object

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_os_firewall PolicyDeviceAssuranceMacos#tpsp_os_firewall}

---

##### `TpspOsVersion`<sup>Optional</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion"></a>

```csharp
public string TpspOsVersion { get; set; }
```

- *Type:* string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_os_version PolicyDeviceAssuranceMacos#tpsp_os_version}

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```csharp
public string TpspPasswordProctectionWarningTrigger { get; set; }
```

- *Type:* string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceMacos#tpsp_password_proctection_warning_trigger}

---

##### `TpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode"></a>

```csharp
public object TpspRealtimeUrlCheckMode { get; set; }
```

- *Type:* object

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceMacos#tpsp_realtime_url_check_mode}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```csharp
public string TpspSafeBrowsingProtectionLevel { get; set; }
```

- *Type:* string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceMacos#tpsp_safe_browsing_protection_level}

---

##### `TpspScreenLockSecured`<sup>Optional</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured"></a>

```csharp
public object TpspScreenLockSecured { get; set; }
```

- *Type:* object

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_screen_lock_secured PolicyDeviceAssuranceMacos#tpsp_screen_lock_secured}

---

##### `TpspSiteIsolationEnabled`<sup>Optional</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled"></a>

```csharp
public object TpspSiteIsolationEnabled { get; set; }
```

- *Type:* object

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_device_assurance_macos#tpsp_site_isolation_enabled PolicyDeviceAssuranceMacos#tpsp_site_isolation_enabled}

---



