# `idpSocial` Submodule <a name="`idpSocial` Submodule" id="@cdktf/provider-okta.idpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSocial <a name="IdpSocial" id="@cdktf/provider-okta.idpSocial.IdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new IdpSocial(Construct Scope, string Id, IdpSocialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig">IdpSocialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig">IdpSocialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid">ResetAppleKid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey">ResetApplePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId">ResetAppleTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.idpSocial.IdpSocial.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.idpSocial.IdpSocial.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.idpSocial.IdpSocial.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction"></a>

```csharp
private void ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude"></a>

```csharp
private void ResetAccountLinkGroupInclude()
```

##### `ResetAppleKid` <a name="ResetAppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid"></a>

```csharp
private void ResetAppleKid()
```

##### `ResetApplePrivateKey` <a name="ResetApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey"></a>

```csharp
private void ResetApplePrivateKey()
```

##### `ResetAppleTeamId` <a name="ResetAppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId"></a>

```csharp
private void ResetAppleTeamId()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction"></a>

```csharp
private void ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction"></a>

```csharp
private void ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment"></a>

```csharp
private void ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute"></a>

```csharp
private void ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter"></a>

```csharp
private void ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode"></a>

```csharp
private void ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew"></a>

```csharp
private void ResetMaxClockSkew()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster"></a>

```csharp
private void ResetProfileMaster()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType"></a>

```csharp
private void ResetProtocolType()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction"></a>

```csharp
private void ResetProvisioningAction()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute"></a>

```csharp
private void ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType"></a>

```csharp
private void ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction"></a>

```csharp
private void ResetSuspendedAction()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdpSocial resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpSocial.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpSocial.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpSocial.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpSocial.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdpSocial resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdpSocial to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdpSocial that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdpSocial to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding">AuthorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding">TokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustAudience">TrustAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustIssuer">TrustIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustKid">TrustKid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocation">TrustRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocationCacheLifetime">TrustRevocationCacheLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput">AppleKidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput">ApplePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput">AppleTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput">GroupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput">IssuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput">ProfileMasterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid">AppleKid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey">ApplePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId">AppleTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction">GroupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding"></a>

```csharp
public string AuthorizationBinding { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding"></a>

```csharp
public string TokenBinding { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `TrustAudience`<sup>Required</sup> <a name="TrustAudience" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustAudience"></a>

```csharp
public string TrustAudience { get; }
```

- *Type:* string

---

##### `TrustIssuer`<sup>Required</sup> <a name="TrustIssuer" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustIssuer"></a>

```csharp
public string TrustIssuer { get; }
```

- *Type:* string

---

##### `TrustKid`<sup>Required</sup> <a name="TrustKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustKid"></a>

```csharp
public string TrustKid { get; }
```

- *Type:* string

---

##### `TrustRevocation`<sup>Required</sup> <a name="TrustRevocation" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocation"></a>

```csharp
public string TrustRevocation { get; }
```

- *Type:* string

---

##### `TrustRevocationCacheLifetime`<sup>Required</sup> <a name="TrustRevocationCacheLifetime" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocationCacheLifetime"></a>

```csharp
public double TrustRevocationCacheLifetime { get; }
```

- *Type:* double

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput"></a>

```csharp
public string AccountLinkActionInput { get; }
```

- *Type:* string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput"></a>

```csharp
public string[] AccountLinkGroupIncludeInput { get; }
```

- *Type:* string[]

---

##### `AppleKidInput`<sup>Optional</sup> <a name="AppleKidInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput"></a>

```csharp
public string AppleKidInput { get; }
```

- *Type:* string

---

##### `ApplePrivateKeyInput`<sup>Optional</sup> <a name="ApplePrivateKeyInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput"></a>

```csharp
public string ApplePrivateKeyInput { get; }
```

- *Type:* string

---

##### `AppleTeamIdInput`<sup>Optional</sup> <a name="AppleTeamIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput"></a>

```csharp
public string AppleTeamIdInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput"></a>

```csharp
public string DeprovisionedActionInput { get; }
```

- *Type:* string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput"></a>

```csharp
public string GroupsActionInput { get; }
```

- *Type:* string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput"></a>

```csharp
public string[] GroupsAssignmentInput { get; }
```

- *Type:* string[]

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput"></a>

```csharp
public string GroupsAttributeInput { get; }
```

- *Type:* string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput"></a>

```csharp
public string[] GroupsFilterInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput"></a>

```csharp
public string IssuerModeInput { get; }
```

- *Type:* string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput"></a>

```csharp
public double MaxClockSkewInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput"></a>

```csharp
public object ProfileMasterInput { get; }
```

- *Type:* object

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput"></a>

```csharp
public string ProvisioningActionInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput"></a>

```csharp
public string SubjectMatchAttributeInput { get; }
```

- *Type:* string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput"></a>

```csharp
public string SubjectMatchTypeInput { get; }
```

- *Type:* string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput"></a>

```csharp
public string SuspendedActionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; }
```

- *Type:* string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; }
```

- *Type:* string[]

---

##### `AppleKid`<sup>Required</sup> <a name="AppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid"></a>

```csharp
public string AppleKid { get; }
```

- *Type:* string

---

##### `ApplePrivateKey`<sup>Required</sup> <a name="ApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey"></a>

```csharp
public string ApplePrivateKey { get; }
```

- *Type:* string

---

##### `AppleTeamId`<sup>Required</sup> <a name="AppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId"></a>

```csharp
public string AppleTeamId { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; }
```

- *Type:* string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction"></a>

```csharp
public string GroupsAction { get; }
```

- *Type:* string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; }
```

- *Type:* string[]

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; }
```

- *Type:* string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; }
```

- *Type:* object

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; }
```

- *Type:* string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; }
```

- *Type:* string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSocialConfig <a name="IdpSocialConfig" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new IdpSocialConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] Scopes,
    string Type,
    string AccountLinkAction = null,
    string[] AccountLinkGroupInclude = null,
    string AppleKid = null,
    string ApplePrivateKey = null,
    string AppleTeamId = null,
    string ClientId = null,
    string ClientSecret = null,
    string DeprovisionedAction = null,
    string GroupsAction = null,
    string[] GroupsAssignment = null,
    string GroupsAttribute = null,
    string[] GroupsFilter = null,
    string Id = null,
    string IssuerMode = null,
    double MaxClockSkew = null,
    object ProfileMaster = null,
    string ProtocolType = null,
    string ProvisioningAction = null,
    string Status = null,
    string SubjectMatchAttribute = null,
    string SubjectMatchType = null,
    string SuspendedAction = null,
    string UsernameTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name">Name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The scopes of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type">Type</a></code> | <code>string</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | Specifies the account linking action for an IdP user. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | Group memberships to determine link candidates. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid">AppleKid</a></code> | <code>string</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey">ApplePrivateKey</a></code> | <code>string</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId">AppleTeamId</a></code> | <code>string</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId">ClientId</a></code> | <code>string</code> | Unique identifier issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Client secret issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction">GroupsAction</a></code> | <code>string</code> | Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | IdP user profile attribute name (case-insensitive) for an array value that contains group memberships. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#id IdpSocial#id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode">IssuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | Maximum allowable clock-skew when processing messages from the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | Determines if the IdP should act as a source of truth for user profile attributes. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType">ProtocolType</a></code> | <code>string</code> | The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OAUTH2`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | Provisioning action for an IdP user during authentication. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status">Status</a></code> | <code>string</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#name IdpSocial#name}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The scopes of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#scopes IdpSocial#scopes}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#type IdpSocial#type}

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; set; }
```

- *Type:* string

Specifies the account linking action for an IdP user. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; set; }
```

- *Type:* string[]

Group memberships to determine link candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}

---

##### `AppleKid`<sup>Optional</sup> <a name="AppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid"></a>

```csharp
public string AppleKid { get; set; }
```

- *Type:* string

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}

---

##### `ApplePrivateKey`<sup>Optional</sup> <a name="ApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey"></a>

```csharp
public string ApplePrivateKey { get; set; }
```

- *Type:* string

The Key ID that you obtained from Apple when you created the private key for the client.

PrivateKey is required when resource is first created. For all consecutive updates, it can be empty/omitted and keeps the existing value if it is empty/omitted. PrivateKey isn't returned when importing this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}

---

##### `AppleTeamId`<sup>Optional</sup> <a name="AppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId"></a>

```csharp
public string AppleTeamId { get; set; }
```

- *Type:* string

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Unique identifier issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#client_id IdpSocial#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Client secret issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#client_secret IdpSocial#client_secret}

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; set; }
```

- *Type:* string

Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction"></a>

```csharp
public string GroupsAction { get; set; }
```

- *Type:* string

Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#groups_action IdpSocial#groups_action}

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; set; }
```

- *Type:* string[]

List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; set; }
```

- *Type:* string

IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; set; }
```

- *Type:* string[]

Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#id IdpSocial#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode"></a>

```csharp
public string IssuerMode { get; set; }
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

It can be `ORG_URL` or `CUSTOM_URL`. Default: `ORG_URL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; set; }
```

- *Type:* double

Maximum allowable clock-skew when processing messages from the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; set; }
```

- *Type:* object

Determines if the IdP should act as a source of truth for user profile attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#profile_master IdpSocial#profile_master}

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OAUTH2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; set; }
```

- *Type:* string

Provisioning action for an IdP user during authentication. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#status IdpSocial#status}

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; set; }
```

- *Type:* string

Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; set; }
```

- *Type:* string

Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username.

By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; set; }
```

- *Type:* string

Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_social#username_template IdpSocial#username_template}

---



