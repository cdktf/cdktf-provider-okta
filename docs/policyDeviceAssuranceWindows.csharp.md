# `policyDeviceAssuranceWindows` Submodule <a name="`policyDeviceAssuranceWindows` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceWindows <a name="PolicyDeviceAssuranceWindows" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows okta_policy_device_assurance_windows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceWindows(Construct Scope, string Id, PolicyDeviceAssuranceWindowsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig">PolicyDeviceAssuranceWindowsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig">PolicyDeviceAssuranceWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDiskEncryptionType` <a name="ResetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType"></a>

```csharp
private void ResetDiskEncryptionType()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion"></a>

```csharp
private void ResetOsVersion()
```

##### `ResetScreenlockType` <a name="ResetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType"></a>

```csharp
private void ResetScreenlockType()
```

##### `ResetSecureHardwarePresent` <a name="ResetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent"></a>

```csharp
private void ResetSecureHardwarePresent()
```

##### `ResetThirdPartySignalProviders` <a name="ResetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders"></a>

```csharp
private void ResetThirdPartySignalProviders()
```

##### `ResetTpspBrowserVersion` <a name="ResetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion"></a>

```csharp
private void ResetTpspBrowserVersion()
```

##### `ResetTpspBuiltinDnsClientEnabled` <a name="ResetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled"></a>

```csharp
private void ResetTpspBuiltinDnsClientEnabled()
```

##### `ResetTpspChromeRemoteDesktopAppBlocked` <a name="ResetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked"></a>

```csharp
private void ResetTpspChromeRemoteDesktopAppBlocked()
```

##### `ResetTpspCrowdStrikeAgentId` <a name="ResetTpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId"></a>

```csharp
private void ResetTpspCrowdStrikeAgentId()
```

##### `ResetTpspCrowdStrikeCustomerId` <a name="ResetTpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId"></a>

```csharp
private void ResetTpspCrowdStrikeCustomerId()
```

##### `ResetTpspDeviceEnrollmentDomain` <a name="ResetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain"></a>

```csharp
private void ResetTpspDeviceEnrollmentDomain()
```

##### `ResetTpspDiskEncrypted` <a name="ResetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted"></a>

```csharp
private void ResetTpspDiskEncrypted()
```

##### `ResetTpspKeyTrustLevel` <a name="ResetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel"></a>

```csharp
private void ResetTpspKeyTrustLevel()
```

##### `ResetTpspOsFirewall` <a name="ResetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall"></a>

```csharp
private void ResetTpspOsFirewall()
```

##### `ResetTpspOsVersion` <a name="ResetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion"></a>

```csharp
private void ResetTpspOsVersion()
```

##### `ResetTpspPasswordProctectionWarningTrigger` <a name="ResetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger"></a>

```csharp
private void ResetTpspPasswordProctectionWarningTrigger()
```

##### `ResetTpspRealtimeUrlCheckMode` <a name="ResetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode"></a>

```csharp
private void ResetTpspRealtimeUrlCheckMode()
```

##### `ResetTpspSafeBrowsingProtectionLevel` <a name="ResetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel"></a>

```csharp
private void ResetTpspSafeBrowsingProtectionLevel()
```

##### `ResetTpspScreenLockSecured` <a name="ResetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured"></a>

```csharp
private void ResetTpspScreenLockSecured()
```

##### `ResetTpspSecureBootEnabled` <a name="ResetTpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled"></a>

```csharp
private void ResetTpspSecureBootEnabled()
```

##### `ResetTpspSiteIsolationEnabled` <a name="ResetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled"></a>

```csharp
private void ResetTpspSiteIsolationEnabled()
```

##### `ResetTpspThirdPartyBlockingEnabled` <a name="ResetTpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled"></a>

```csharp
private void ResetTpspThirdPartyBlockingEnabled()
```

##### `ResetTpspWindowsMachineDomain` <a name="ResetTpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain"></a>

```csharp
private void ResetTpspWindowsMachineDomain()
```

##### `ResetTpspWindowsUserDomain` <a name="ResetTpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain"></a>

```csharp
private void ResetTpspWindowsUserDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceWindows.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceWindows.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceWindows.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceWindows.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceWindows to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate">LastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput">DiskEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput">OsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput">ScreenlockTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput">SecureHardwarePresentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput">ThirdPartySignalProvidersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput">TpspBrowserVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput">TpspBuiltinDnsClientEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput">TpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput">TpspCrowdStrikeAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput">TpspCrowdStrikeCustomerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput">TpspDeviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput">TpspDiskEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput">TpspKeyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput">TpspOsFirewallInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput">TpspOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput">TpspPasswordProctectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput">TpspRealtimeUrlCheckModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput">TpspSafeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput">TpspScreenLockSecuredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput">TpspSecureBootEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput">TpspSiteIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput">TpspThirdPartyBlockingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput">TpspWindowsMachineDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput">TpspWindowsUserDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType">ScreenlockType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId">TpspCrowdStrikeAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId">TpspCrowdStrikeCustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion">TpspOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled">TpspSecureBootEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled">TpspThirdPartyBlockingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain">TpspWindowsMachineDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain">TpspWindowsUserDomain</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate"></a>

```csharp
public string LastUpdate { get; }
```

- *Type:* string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `DiskEncryptionTypeInput`<sup>Optional</sup> <a name="DiskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput"></a>

```csharp
public string[] DiskEncryptionTypeInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput"></a>

```csharp
public string OsVersionInput { get; }
```

- *Type:* string

---

##### `ScreenlockTypeInput`<sup>Optional</sup> <a name="ScreenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput"></a>

```csharp
public string[] ScreenlockTypeInput { get; }
```

- *Type:* string[]

---

##### `SecureHardwarePresentInput`<sup>Optional</sup> <a name="SecureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput"></a>

```csharp
public object SecureHardwarePresentInput { get; }
```

- *Type:* object

---

##### `ThirdPartySignalProvidersInput`<sup>Optional</sup> <a name="ThirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput"></a>

```csharp
public object ThirdPartySignalProvidersInput { get; }
```

- *Type:* object

---

##### `TpspBrowserVersionInput`<sup>Optional</sup> <a name="TpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput"></a>

```csharp
public string TpspBrowserVersionInput { get; }
```

- *Type:* string

---

##### `TpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput"></a>

```csharp
public object TpspBuiltinDnsClientEnabledInput { get; }
```

- *Type:* object

---

##### `TpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlockedInput { get; }
```

- *Type:* object

---

##### `TpspCrowdStrikeAgentIdInput`<sup>Optional</sup> <a name="TpspCrowdStrikeAgentIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput"></a>

```csharp
public string TpspCrowdStrikeAgentIdInput { get; }
```

- *Type:* string

---

##### `TpspCrowdStrikeCustomerIdInput`<sup>Optional</sup> <a name="TpspCrowdStrikeCustomerIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput"></a>

```csharp
public string TpspCrowdStrikeCustomerIdInput { get; }
```

- *Type:* string

---

##### `TpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput"></a>

```csharp
public string TpspDeviceEnrollmentDomainInput { get; }
```

- *Type:* string

---

##### `TpspDiskEncryptedInput`<sup>Optional</sup> <a name="TpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput"></a>

```csharp
public object TpspDiskEncryptedInput { get; }
```

- *Type:* object

---

##### `TpspKeyTrustLevelInput`<sup>Optional</sup> <a name="TpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput"></a>

```csharp
public string TpspKeyTrustLevelInput { get; }
```

- *Type:* string

---

##### `TpspOsFirewallInput`<sup>Optional</sup> <a name="TpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput"></a>

```csharp
public object TpspOsFirewallInput { get; }
```

- *Type:* object

---

##### `TpspOsVersionInput`<sup>Optional</sup> <a name="TpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput"></a>

```csharp
public string TpspOsVersionInput { get; }
```

- *Type:* string

---

##### `TpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput"></a>

```csharp
public string TpspPasswordProctectionWarningTriggerInput { get; }
```

- *Type:* string

---

##### `TpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput"></a>

```csharp
public object TpspRealtimeUrlCheckModeInput { get; }
```

- *Type:* object

---

##### `TpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput"></a>

```csharp
public string TpspSafeBrowsingProtectionLevelInput { get; }
```

- *Type:* string

---

##### `TpspScreenLockSecuredInput`<sup>Optional</sup> <a name="TpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput"></a>

```csharp
public object TpspScreenLockSecuredInput { get; }
```

- *Type:* object

---

##### `TpspSecureBootEnabledInput`<sup>Optional</sup> <a name="TpspSecureBootEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput"></a>

```csharp
public object TpspSecureBootEnabledInput { get; }
```

- *Type:* object

---

##### `TpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="TpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput"></a>

```csharp
public object TpspSiteIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `TpspThirdPartyBlockingEnabledInput`<sup>Optional</sup> <a name="TpspThirdPartyBlockingEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput"></a>

```csharp
public object TpspThirdPartyBlockingEnabledInput { get; }
```

- *Type:* object

---

##### `TpspWindowsMachineDomainInput`<sup>Optional</sup> <a name="TpspWindowsMachineDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput"></a>

```csharp
public string TpspWindowsMachineDomainInput { get; }
```

- *Type:* string

---

##### `TpspWindowsUserDomainInput`<sup>Optional</sup> <a name="TpspWindowsUserDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput"></a>

```csharp
public string TpspWindowsUserDomainInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionType`<sup>Required</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType"></a>

```csharp
public string[] DiskEncryptionType { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `ScreenlockType`<sup>Required</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType"></a>

```csharp
public string[] ScreenlockType { get; }
```

- *Type:* string[]

---

##### `SecureHardwarePresent`<sup>Required</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent"></a>

```csharp
public object SecureHardwarePresent { get; }
```

- *Type:* object

---

##### `ThirdPartySignalProviders`<sup>Required</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders"></a>

```csharp
public object ThirdPartySignalProviders { get; }
```

- *Type:* object

---

##### `TpspBrowserVersion`<sup>Required</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion"></a>

```csharp
public string TpspBrowserVersion { get; }
```

- *Type:* string

---

##### `TpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled"></a>

```csharp
public object TpspBuiltinDnsClientEnabled { get; }
```

- *Type:* object

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlocked { get; }
```

- *Type:* object

---

##### `TpspCrowdStrikeAgentId`<sup>Required</sup> <a name="TpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId"></a>

```csharp
public string TpspCrowdStrikeAgentId { get; }
```

- *Type:* string

---

##### `TpspCrowdStrikeCustomerId`<sup>Required</sup> <a name="TpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId"></a>

```csharp
public string TpspCrowdStrikeCustomerId { get; }
```

- *Type:* string

---

##### `TpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain"></a>

```csharp
public string TpspDeviceEnrollmentDomain { get; }
```

- *Type:* string

---

##### `TpspDiskEncrypted`<sup>Required</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted"></a>

```csharp
public object TpspDiskEncrypted { get; }
```

- *Type:* object

---

##### `TpspKeyTrustLevel`<sup>Required</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel"></a>

```csharp
public string TpspKeyTrustLevel { get; }
```

- *Type:* string

---

##### `TpspOsFirewall`<sup>Required</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall"></a>

```csharp
public object TpspOsFirewall { get; }
```

- *Type:* object

---

##### `TpspOsVersion`<sup>Required</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion"></a>

```csharp
public string TpspOsVersion { get; }
```

- *Type:* string

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger"></a>

```csharp
public string TpspPasswordProctectionWarningTrigger { get; }
```

- *Type:* string

---

##### `TpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode"></a>

```csharp
public object TpspRealtimeUrlCheckMode { get; }
```

- *Type:* object

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel"></a>

```csharp
public string TpspSafeBrowsingProtectionLevel { get; }
```

- *Type:* string

---

##### `TpspScreenLockSecured`<sup>Required</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured"></a>

```csharp
public object TpspScreenLockSecured { get; }
```

- *Type:* object

---

##### `TpspSecureBootEnabled`<sup>Required</sup> <a name="TpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled"></a>

```csharp
public object TpspSecureBootEnabled { get; }
```

- *Type:* object

---

##### `TpspSiteIsolationEnabled`<sup>Required</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled"></a>

```csharp
public object TpspSiteIsolationEnabled { get; }
```

- *Type:* object

---

##### `TpspThirdPartyBlockingEnabled`<sup>Required</sup> <a name="TpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled"></a>

```csharp
public object TpspThirdPartyBlockingEnabled { get; }
```

- *Type:* object

---

##### `TpspWindowsMachineDomain`<sup>Required</sup> <a name="TpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain"></a>

```csharp
public string TpspWindowsMachineDomain { get; }
```

- *Type:* string

---

##### `TpspWindowsUserDomain`<sup>Required</sup> <a name="TpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain"></a>

```csharp
public string TpspWindowsUserDomain { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceWindowsConfig <a name="PolicyDeviceAssuranceWindowsConfig" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceWindowsConfig {
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
    string TpspCrowdStrikeAgentId = null,
    string TpspCrowdStrikeCustomerId = null,
    string TpspDeviceEnrollmentDomain = null,
    object TpspDiskEncrypted = null,
    string TpspKeyTrustLevel = null,
    object TpspOsFirewall = null,
    string TpspOsVersion = null,
    string TpspPasswordProctectionWarningTrigger = null,
    object TpspRealtimeUrlCheckMode = null,
    string TpspSafeBrowsingProtectionLevel = null,
    object TpspScreenLockSecured = null,
    object TpspSecureBootEnabled = null,
    object TpspSiteIsolationEnabled = null,
    object TpspThirdPartyBlockingEnabled = null,
    string TpspWindowsMachineDomain = null,
    string TpspWindowsUserDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name">Name</a></code> | <code>string</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>string[]</code> | List of disk encryption type, can be ALL_INTERNAL_VOLUMES. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion">OsVersion</a></code> | <code>string</code> | The device os minimum version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType">ScreenlockType</a></code> | <code>string[]</code> | List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>object</code> | Indicates if the device constains a secure hardware functionality. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders">ThirdPartySignalProviders</a></code> | <code>object</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion">TpspBrowserVersion</a></code> | <code>string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled">TpspBuiltinDnsClientEnabled</a></code> | <code>object</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked">TpspChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId">TpspCrowdStrikeAgentId</a></code> | <code>string</code> | Third party signal provider crowdstrike agent id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId">TpspCrowdStrikeCustomerId</a></code> | <code>string</code> | Third party signal provider crowdstrike user id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain">TpspDeviceEnrollmentDomain</a></code> | <code>string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted">TpspDiskEncrypted</a></code> | <code>object</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel">TpspKeyTrustLevel</a></code> | <code>string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall">TpspOsFirewall</a></code> | <code>object</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion">TpspOsVersion</a></code> | <code>string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger">TpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode">TpspRealtimeUrlCheckMode</a></code> | <code>object</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel">TpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured">TpspScreenLockSecured</a></code> | <code>object</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled">TpspSecureBootEnabled</a></code> | <code>object</code> | Third party signal provider secure boot enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled">TpspSiteIsolationEnabled</a></code> | <code>object</code> | Third party signal provider site isolation enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled">TpspThirdPartyBlockingEnabled</a></code> | <code>object</code> | Third party signal provider third party blocking enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain">TpspWindowsMachineDomain</a></code> | <code>string</code> | Third party signal provider windows machine domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain">TpspWindowsUserDomain</a></code> | <code>string</code> | Third party signal provider windows user domain. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}

---

##### `DiskEncryptionType`<sup>Optional</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType"></a>

```csharp
public string[] DiskEncryptionType { get; set; }
```

- *Type:* string[]

List of disk encryption type, can be ALL_INTERNAL_VOLUMES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion"></a>

```csharp
public string OsVersion { get; set; }
```

- *Type:* string

The device os minimum version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}

---

##### `ScreenlockType`<sup>Optional</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType"></a>

```csharp
public string[] ScreenlockType { get; set; }
```

- *Type:* string[]

List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}

---

##### `SecureHardwarePresent`<sup>Optional</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent"></a>

```csharp
public object SecureHardwarePresent { get; set; }
```

- *Type:* object

Indicates if the device constains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}

---

##### `ThirdPartySignalProviders`<sup>Optional</sup> <a name="ThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders"></a>

```csharp
public object ThirdPartySignalProviders { get; set; }
```

- *Type:* object

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}

---

##### `TpspBrowserVersion`<sup>Optional</sup> <a name="TpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion"></a>

```csharp
public string TpspBrowserVersion { get; set; }
```

- *Type:* string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}

---

##### `TpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="TpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled"></a>

```csharp
public object TpspBuiltinDnsClientEnabled { get; set; }
```

- *Type:* object

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}

---

##### `TpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="TpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```csharp
public object TpspChromeRemoteDesktopAppBlocked { get; set; }
```

- *Type:* object

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}

---

##### `TpspCrowdStrikeAgentId`<sup>Optional</sup> <a name="TpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId"></a>

```csharp
public string TpspCrowdStrikeAgentId { get; set; }
```

- *Type:* string

Third party signal provider crowdstrike agent id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}

---

##### `TpspCrowdStrikeCustomerId`<sup>Optional</sup> <a name="TpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId"></a>

```csharp
public string TpspCrowdStrikeCustomerId { get; set; }
```

- *Type:* string

Third party signal provider crowdstrike user id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}

---

##### `TpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="TpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain"></a>

```csharp
public string TpspDeviceEnrollmentDomain { get; set; }
```

- *Type:* string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}

---

##### `TpspDiskEncrypted`<sup>Optional</sup> <a name="TpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted"></a>

```csharp
public object TpspDiskEncrypted { get; set; }
```

- *Type:* object

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}

---

##### `TpspKeyTrustLevel`<sup>Optional</sup> <a name="TpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel"></a>

```csharp
public string TpspKeyTrustLevel { get; set; }
```

- *Type:* string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}

---

##### `TpspOsFirewall`<sup>Optional</sup> <a name="TpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall"></a>

```csharp
public object TpspOsFirewall { get; set; }
```

- *Type:* object

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}

---

##### `TpspOsVersion`<sup>Optional</sup> <a name="TpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion"></a>

```csharp
public string TpspOsVersion { get; set; }
```

- *Type:* string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}

---

##### `TpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="TpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```csharp
public string TpspPasswordProctectionWarningTrigger { get; set; }
```

- *Type:* string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}

---

##### `TpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="TpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode"></a>

```csharp
public object TpspRealtimeUrlCheckMode { get; set; }
```

- *Type:* object

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}

---

##### `TpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="TpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```csharp
public string TpspSafeBrowsingProtectionLevel { get; set; }
```

- *Type:* string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}

---

##### `TpspScreenLockSecured`<sup>Optional</sup> <a name="TpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured"></a>

```csharp
public object TpspScreenLockSecured { get; set; }
```

- *Type:* object

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}

---

##### `TpspSecureBootEnabled`<sup>Optional</sup> <a name="TpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled"></a>

```csharp
public object TpspSecureBootEnabled { get; set; }
```

- *Type:* object

Third party signal provider secure boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}

---

##### `TpspSiteIsolationEnabled`<sup>Optional</sup> <a name="TpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled"></a>

```csharp
public object TpspSiteIsolationEnabled { get; set; }
```

- *Type:* object

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}

---

##### `TpspThirdPartyBlockingEnabled`<sup>Optional</sup> <a name="TpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled"></a>

```csharp
public object TpspThirdPartyBlockingEnabled { get; set; }
```

- *Type:* object

Third party signal provider third party blocking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}

---

##### `TpspWindowsMachineDomain`<sup>Optional</sup> <a name="TpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain"></a>

```csharp
public string TpspWindowsMachineDomain { get; set; }
```

- *Type:* string

Third party signal provider windows machine domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}

---

##### `TpspWindowsUserDomain`<sup>Optional</sup> <a name="TpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain"></a>

```csharp
public string TpspWindowsUserDomain { get; set; }
```

- *Type:* string

Third party signal provider windows user domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}

---



