# `policyMfa` Submodule <a name="`policyMfa` Submodule" id="@cdktf/provider-okta.policyMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfa <a name="PolicyMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa okta_policy_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyMfa(Construct Scope, string Id, PolicyMfaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig">PolicyMfaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig">PolicyMfaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo">ResetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp">ResetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdps">ResetExternalIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F">ResetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn">ResetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp">ResetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded">ResetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp">ResetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie">ResetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall">ResetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail">ResetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp">ResetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword">ResetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush">ResetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion">ResetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms">ResetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify">ResetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa">ResetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken">ResetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion">ResetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip">ResetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn">ResetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken">ResetYubikeyToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyMfa.PolicyMfa.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDuo` <a name="ResetDuo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo"></a>

```csharp
private void ResetDuo()
```

##### `ResetExternalIdp` <a name="ResetExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp"></a>

```csharp
private void ResetExternalIdp()
```

##### `ResetExternalIdps` <a name="ResetExternalIdps" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdps"></a>

```csharp
private void ResetExternalIdps()
```

##### `ResetFidoU2F` <a name="ResetFidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F"></a>

```csharp
private void ResetFidoU2F()
```

##### `ResetFidoWebauthn` <a name="ResetFidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn"></a>

```csharp
private void ResetFidoWebauthn()
```

##### `ResetGoogleOtp` <a name="ResetGoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp"></a>

```csharp
private void ResetGoogleOtp()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded"></a>

```csharp
private void ResetGroupsIncluded()
```

##### `ResetHotp` <a name="ResetHotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp"></a>

```csharp
private void ResetHotp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsOie` <a name="ResetIsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie"></a>

```csharp
private void ResetIsOie()
```

##### `ResetOktaCall` <a name="ResetOktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall"></a>

```csharp
private void ResetOktaCall()
```

##### `ResetOktaEmail` <a name="ResetOktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail"></a>

```csharp
private void ResetOktaEmail()
```

##### `ResetOktaOtp` <a name="ResetOktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp"></a>

```csharp
private void ResetOktaOtp()
```

##### `ResetOktaPassword` <a name="ResetOktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword"></a>

```csharp
private void ResetOktaPassword()
```

##### `ResetOktaPush` <a name="ResetOktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush"></a>

```csharp
private void ResetOktaPush()
```

##### `ResetOktaQuestion` <a name="ResetOktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion"></a>

```csharp
private void ResetOktaQuestion()
```

##### `ResetOktaSms` <a name="ResetOktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms"></a>

```csharp
private void ResetOktaSms()
```

##### `ResetOktaVerify` <a name="ResetOktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify"></a>

```csharp
private void ResetOktaVerify()
```

##### `ResetOnpremMfa` <a name="ResetOnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa"></a>

```csharp
private void ResetOnpremMfa()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRsaToken` <a name="ResetRsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken"></a>

```csharp
private void ResetRsaToken()
```

##### `ResetSecurityQuestion` <a name="ResetSecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion"></a>

```csharp
private void ResetSecurityQuestion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSymantecVip` <a name="ResetSymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip"></a>

```csharp
private void ResetSymantecVip()
```

##### `ResetWebauthn` <a name="ResetWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn"></a>

```csharp
private void ResetWebauthn()
```

##### `ResetYubikeyToken` <a name="ResetYubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken"></a>

```csharp
private void ResetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyMfa resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyMfa.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyMfa.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyMfa.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyMfa.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyMfa resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyMfa to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyMfa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyMfa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput">DuoInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput">ExternalIdpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpsInput">ExternalIdpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput">FidoU2FInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput">FidoWebauthnInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput">GoogleOtpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput">HotpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput">IsOieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput">OktaCallInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput">OktaEmailInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput">OktaOtpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput">OktaPasswordInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput">OktaPushInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput">OktaQuestionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput">OktaSmsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput">OktaVerifyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput">OnpremMfaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput">RsaTokenInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput">SecurityQuestionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput">SymantecVipInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput">WebauthnInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput">YubikeyTokenInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo">Duo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp">ExternalIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdps">ExternalIdps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F">FidoU2F</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn">FidoWebauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp">GoogleOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp">Hotp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie">IsOie</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall">OktaCall</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail">OktaEmail</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp">OktaOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword">OktaPassword</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush">OktaPush</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion">OktaQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms">OktaSms</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify">OktaVerify</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa">OnpremMfa</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber">PhoneNumber</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken">RsaToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion">SecurityQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip">SymantecVip</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn">Webauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken">YubikeyToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DuoInput`<sup>Optional</sup> <a name="DuoInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DuoInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdpInput`<sup>Optional</sup> <a name="ExternalIdpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdpsInput`<sup>Optional</sup> <a name="ExternalIdpsInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpsInput"></a>

```csharp
public object ExternalIdpsInput { get; }
```

- *Type:* object

---

##### `FidoU2FInput`<sup>Optional</sup> <a name="FidoU2FInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2FInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoWebauthnInput`<sup>Optional</sup> <a name="FidoWebauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthnInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GoogleOtpInput`<sup>Optional</sup> <a name="GoogleOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput"></a>

```csharp
public string[] GroupsIncludedInput { get; }
```

- *Type:* string[]

---

##### `HotpInput`<sup>Optional</sup> <a name="HotpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HotpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsOieInput`<sup>Optional</sup> <a name="IsOieInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput"></a>

```csharp
public object IsOieInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OktaCallInput`<sup>Optional</sup> <a name="OktaCallInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCallInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaEmailInput`<sup>Optional</sup> <a name="OktaEmailInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmailInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaOtpInput`<sup>Optional</sup> <a name="OktaOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPasswordInput`<sup>Optional</sup> <a name="OktaPasswordInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPasswordInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPushInput`<sup>Optional</sup> <a name="OktaPushInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPushInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaQuestionInput`<sup>Optional</sup> <a name="OktaQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaSmsInput`<sup>Optional</sup> <a name="OktaSmsInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSmsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaVerifyInput`<sup>Optional</sup> <a name="OktaVerifyInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerifyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnpremMfaInput`<sup>Optional</sup> <a name="OnpremMfaInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumberInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RsaTokenInput`<sup>Optional</sup> <a name="RsaTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaTokenInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityQuestionInput`<sup>Optional</sup> <a name="SecurityQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SymantecVipInput`<sup>Optional</sup> <a name="SymantecVipInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVipInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebauthnInput`<sup>Optional</sup> <a name="WebauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WebauthnInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `YubikeyTokenInput`<sup>Optional</sup> <a name="YubikeyTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyTokenInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Duo`<sup>Required</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Duo { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdp`<sup>Required</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdps`<sup>Required</sup> <a name="ExternalIdps" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdps"></a>

```csharp
public object ExternalIdps { get; }
```

- *Type:* object

---

##### `FidoU2F`<sup>Required</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2F { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoWebauthn`<sup>Required</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthn { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GoogleOtp`<sup>Required</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; }
```

- *Type:* string[]

---

##### `Hotp`<sup>Required</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hotp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsOie`<sup>Required</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie"></a>

```csharp
public object IsOie { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OktaCall`<sup>Required</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCall { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaEmail`<sup>Required</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmail { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaOtp`<sup>Required</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPassword`<sup>Required</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPassword { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPush`<sup>Required</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPush { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaQuestion`<sup>Required</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaSms`<sup>Required</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSms { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaVerify`<sup>Required</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerify { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnpremMfa`<sup>Required</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfa { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumber { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RsaToken`<sup>Required</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaToken { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityQuestion`<sup>Required</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SymantecVip`<sup>Required</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVip { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Webauthn`<sup>Required</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Webauthn { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `YubikeyToken`<sup>Required</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyToken { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaConfig <a name="PolicyMfaConfig" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyMfaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Duo = null,
    System.Collections.Generic.IDictionary<string, string> ExternalIdp = null,
    object ExternalIdps = null,
    System.Collections.Generic.IDictionary<string, string> FidoU2F = null,
    System.Collections.Generic.IDictionary<string, string> FidoWebauthn = null,
    System.Collections.Generic.IDictionary<string, string> GoogleOtp = null,
    string[] GroupsIncluded = null,
    System.Collections.Generic.IDictionary<string, string> Hotp = null,
    string Id = null,
    object IsOie = null,
    System.Collections.Generic.IDictionary<string, string> OktaCall = null,
    System.Collections.Generic.IDictionary<string, string> OktaEmail = null,
    System.Collections.Generic.IDictionary<string, string> OktaOtp = null,
    System.Collections.Generic.IDictionary<string, string> OktaPassword = null,
    System.Collections.Generic.IDictionary<string, string> OktaPush = null,
    System.Collections.Generic.IDictionary<string, string> OktaQuestion = null,
    System.Collections.Generic.IDictionary<string, string> OktaSms = null,
    System.Collections.Generic.IDictionary<string, string> OktaVerify = null,
    System.Collections.Generic.IDictionary<string, string> OnpremMfa = null,
    System.Collections.Generic.IDictionary<string, string> PhoneNumber = null,
    double Priority = null,
    System.Collections.Generic.IDictionary<string, string> RsaToken = null,
    System.Collections.Generic.IDictionary<string, string> SecurityQuestion = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> SymantecVip = null,
    System.Collections.Generic.IDictionary<string, string> Webauthn = null,
    System.Collections.Generic.IDictionary<string, string> YubikeyToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name">Name</a></code> | <code>string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description">Description</a></code> | <code>string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo">Duo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#duo PolicyMfa#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp">ExternalIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdps">ExternalIdps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#external_idps PolicyMfa#external_idps}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F">FidoU2F</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn">FidoWebauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp">GoogleOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp">Hotp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#hotp PolicyMfa#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#id PolicyMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie">IsOie</a></code> | <code>object</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall">OktaCall</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail">OktaEmail</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp">OktaOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword">OktaPassword</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush">OktaPush</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion">OktaQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms">OktaSms</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify">OktaVerify</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa">OnpremMfa</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber">PhoneNumber</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority">Priority</a></code> | <code>double</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken">RsaToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion">SecurityQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#security_question PolicyMfa#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status">Status</a></code> | <code>string</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip">SymantecVip</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn">Webauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken">YubikeyToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#name PolicyMfa#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#description PolicyMfa#description}

---

##### `Duo`<sup>Optional</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Duo { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#duo PolicyMfa#duo}.

---

##### `ExternalIdp`<sup>Optional</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}.

---

##### `ExternalIdps`<sup>Optional</sup> <a name="ExternalIdps" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdps"></a>

```csharp
public object ExternalIdps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#external_idps PolicyMfa#external_idps}.

---

##### `FidoU2F`<sup>Optional</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2F { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}.

---

##### `FidoWebauthn`<sup>Optional</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthn { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}.

---

##### `GoogleOtp`<sup>Optional</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}.

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; set; }
```

- *Type:* string[]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#groups_included PolicyMfa#groups_included}

---

##### `Hotp`<sup>Optional</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hotp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#hotp PolicyMfa#hotp}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#id PolicyMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOie`<sup>Optional</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie"></a>

```csharp
public object IsOie { get; set; }
```

- *Type:* object

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#is_oie PolicyMfa#is_oie}

---

##### `OktaCall`<sup>Optional</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCall { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}.

---

##### `OktaEmail`<sup>Optional</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmail { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}.

---

##### `OktaOtp`<sup>Optional</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}.

---

##### `OktaPassword`<sup>Optional</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPassword { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}.

---

##### `OktaPush`<sup>Optional</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPush { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}.

---

##### `OktaQuestion`<sup>Optional</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}.

---

##### `OktaSms`<sup>Optional</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSms { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}.

---

##### `OktaVerify`<sup>Optional</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerify { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}.

---

##### `OnpremMfa`<sup>Optional</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfa { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumber { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#priority PolicyMfa#priority}

---

##### `RsaToken`<sup>Optional</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaToken { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}.

---

##### `SecurityQuestion`<sup>Optional</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#security_question PolicyMfa#security_question}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#status PolicyMfa#status}

---

##### `SymantecVip`<sup>Optional</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVip { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}.

---

##### `Webauthn`<sup>Optional</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Webauthn { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}.

---

##### `YubikeyToken`<sup>Optional</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyToken { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}.

---



