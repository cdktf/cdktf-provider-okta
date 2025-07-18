# `idpOidc` Submodule <a name="`idpOidc` Submodule" id="@cdktf/provider-okta.idpOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpOidc <a name="IdpOidc" id="@cdktf/provider-okta.idpOidc.IdpOidc"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc okta_idp_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new IdpOidc(Construct Scope, string Id, IdpOidcConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig">IdpOidcConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig">IdpOidcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetPkceRequired">ResetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm">ResetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope">ResetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding">ResetUserInfoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl">ResetUserInfoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.idpOidc.IdpOidc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.idpOidc.IdpOidc.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.idpOidc.IdpOidc.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.idpOidc.IdpOidc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.idpOidc.IdpOidc.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.idpOidc.IdpOidc.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction"></a>

```csharp
private void ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude"></a>

```csharp
private void ResetAccountLinkGroupInclude()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction"></a>

```csharp
private void ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction"></a>

```csharp
private void ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment"></a>

```csharp
private void ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute"></a>

```csharp
private void ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter"></a>

```csharp
private void ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode"></a>

```csharp
private void ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew"></a>

```csharp
private void ResetMaxClockSkew()
```

##### `ResetPkceRequired` <a name="ResetPkceRequired" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetPkceRequired"></a>

```csharp
private void ResetPkceRequired()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster"></a>

```csharp
private void ResetProfileMaster()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType"></a>

```csharp
private void ResetProtocolType()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction"></a>

```csharp
private void ResetProvisioningAction()
```

##### `ResetRequestSignatureAlgorithm` <a name="ResetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm"></a>

```csharp
private void ResetRequestSignatureAlgorithm()
```

##### `ResetRequestSignatureScope` <a name="ResetRequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope"></a>

```csharp
private void ResetRequestSignatureScope()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute"></a>

```csharp
private void ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType"></a>

```csharp
private void ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction"></a>

```csharp
private void ResetSuspendedAction()
```

##### `ResetUserInfoBinding` <a name="ResetUserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding"></a>

```csharp
private void ResetUserInfoBinding()
```

##### `ResetUserInfoUrl` <a name="ResetUserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl"></a>

```csharp
private void ResetUserInfoUrl()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdpOidc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpOidc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpOidc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpOidc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

IdpOidc.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdpOidc resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdpOidc to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdpOidc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdpOidc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId">UserTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput">AuthorizationBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput">GroupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput">IssuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput">JwksBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput">JwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequiredInput">PkceRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput">ProfileMasterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput">RequestSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput">RequestSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput">TokenBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput">UserInfoBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput">UserInfoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding">AuthorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction">GroupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding">JwksBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequired">PkceRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding">TokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding">UserInfoBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl">UserInfoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserTypeId`<sup>Required</sup> <a name="UserTypeId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId"></a>

```csharp
public string UserTypeId { get; }
```

- *Type:* string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput"></a>

```csharp
public string AccountLinkActionInput { get; }
```

- *Type:* string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput"></a>

```csharp
public string[] AccountLinkGroupIncludeInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationBindingInput`<sup>Optional</sup> <a name="AuthorizationBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput"></a>

```csharp
public string AuthorizationBindingInput { get; }
```

- *Type:* string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput"></a>

```csharp
public string AuthorizationUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput"></a>

```csharp
public string DeprovisionedActionInput { get; }
```

- *Type:* string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput"></a>

```csharp
public string GroupsActionInput { get; }
```

- *Type:* string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput"></a>

```csharp
public string[] GroupsAssignmentInput { get; }
```

- *Type:* string[]

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput"></a>

```csharp
public string GroupsAttributeInput { get; }
```

- *Type:* string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput"></a>

```csharp
public string[] GroupsFilterInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput"></a>

```csharp
public string IssuerModeInput { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `JwksBindingInput`<sup>Optional</sup> <a name="JwksBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput"></a>

```csharp
public string JwksBindingInput { get; }
```

- *Type:* string

---

##### `JwksUrlInput`<sup>Optional</sup> <a name="JwksUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput"></a>

```csharp
public string JwksUrlInput { get; }
```

- *Type:* string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput"></a>

```csharp
public double MaxClockSkewInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PkceRequiredInput`<sup>Optional</sup> <a name="PkceRequiredInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequiredInput"></a>

```csharp
public object PkceRequiredInput { get; }
```

- *Type:* object

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput"></a>

```csharp
public object ProfileMasterInput { get; }
```

- *Type:* object

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput"></a>

```csharp
public string ProvisioningActionInput { get; }
```

- *Type:* string

---

##### `RequestSignatureAlgorithmInput`<sup>Optional</sup> <a name="RequestSignatureAlgorithmInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput"></a>

```csharp
public string RequestSignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `RequestSignatureScopeInput`<sup>Optional</sup> <a name="RequestSignatureScopeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput"></a>

```csharp
public string RequestSignatureScopeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput"></a>

```csharp
public string SubjectMatchAttributeInput { get; }
```

- *Type:* string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput"></a>

```csharp
public string SubjectMatchTypeInput { get; }
```

- *Type:* string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput"></a>

```csharp
public string SuspendedActionInput { get; }
```

- *Type:* string

---

##### `TokenBindingInput`<sup>Optional</sup> <a name="TokenBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput"></a>

```csharp
public string TokenBindingInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `UserInfoBindingInput`<sup>Optional</sup> <a name="UserInfoBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput"></a>

```csharp
public string UserInfoBindingInput { get; }
```

- *Type:* string

---

##### `UserInfoUrlInput`<sup>Optional</sup> <a name="UserInfoUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput"></a>

```csharp
public string UserInfoUrlInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; }
```

- *Type:* string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; }
```

- *Type:* string[]

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding"></a>

```csharp
public string AuthorizationBinding { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; }
```

- *Type:* string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction"></a>

```csharp
public string GroupsAction { get; }
```

- *Type:* string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; }
```

- *Type:* string[]

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; }
```

- *Type:* string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `JwksBinding`<sup>Required</sup> <a name="JwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding"></a>

```csharp
public string JwksBinding { get; }
```

- *Type:* string

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; }
```

- *Type:* string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PkceRequired`<sup>Required</sup> <a name="PkceRequired" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequired"></a>

```csharp
public object PkceRequired { get; }
```

- *Type:* object

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; }
```

- *Type:* object

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; }
```

- *Type:* string

---

##### `RequestSignatureAlgorithm`<sup>Required</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm"></a>

```csharp
public string RequestSignatureAlgorithm { get; }
```

- *Type:* string

---

##### `RequestSignatureScope`<sup>Required</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope"></a>

```csharp
public string RequestSignatureScope { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; }
```

- *Type:* string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; }
```

- *Type:* string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; }
```

- *Type:* string

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding"></a>

```csharp
public string TokenBinding { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `UserInfoBinding`<sup>Required</sup> <a name="UserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding"></a>

```csharp
public string UserInfoBinding { get; }
```

- *Type:* string

---

##### `UserInfoUrl`<sup>Required</sup> <a name="UserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl"></a>

```csharp
public string UserInfoUrl { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpOidcConfig <a name="IdpOidcConfig" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new IdpOidcConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthorizationBinding,
    string AuthorizationUrl,
    string ClientId,
    string ClientSecret,
    string IssuerUrl,
    string JwksBinding,
    string JwksUrl,
    string Name,
    string[] Scopes,
    string TokenBinding,
    string TokenUrl,
    string AccountLinkAction = null,
    string[] AccountLinkGroupInclude = null,
    string DeprovisionedAction = null,
    string GroupsAction = null,
    string[] GroupsAssignment = null,
    string GroupsAttribute = null,
    string[] GroupsFilter = null,
    string Id = null,
    string IssuerMode = null,
    double MaxClockSkew = null,
    object PkceRequired = null,
    object ProfileMaster = null,
    string ProtocolType = null,
    string ProvisioningAction = null,
    string RequestSignatureAlgorithm = null,
    string RequestSignatureScope = null,
    string Status = null,
    string SubjectMatchAttribute = null,
    string SubjectMatchType = null,
    string SuspendedAction = null,
    string UserInfoBinding = null,
    string UserInfoUrl = null,
    string UsernameTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding">AuthorizationBinding</a></code> | <code>string</code> | The method of making an authorization request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | IdP Authorization Server (AS) endpoint to request consent from the user and obtain an authorization code grant. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId">ClientId</a></code> | <code>string</code> | Unique identifier issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Client secret issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | URI that identifies the issuer. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding">JwksBinding</a></code> | <code>string</code> | The method of making a request for the OIDC JWKS. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | Endpoint where the keys signer publishes its keys in a JWK Set. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name">Name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The scopes of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding">TokenBinding</a></code> | <code>string</code> | The method of making a token request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | IdP Authorization Server (AS) endpoint to exchange the authorization code grant for an access token. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | Specifies the account linking action for an IdP user. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | Group memberships to determine link candidates. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction">GroupsAction</a></code> | <code>string</code> | Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | IdP user profile attribute name (case-insensitive) for an array value that contains group memberships. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#id IdpOidc#id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode">IssuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, a custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | Maximum allowable clock-skew when processing messages from the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.pkceRequired">PkceRequired</a></code> | <code>object</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/idps/#oauth-2-0-and-openid-connect-client-object. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | Determines if the IdP should act as a source of truth for user profile attributes. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType">ProtocolType</a></code> | <code>string</code> | The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OIDC`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | Provisioning action for an IdP user during authentication. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>string</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>string</code> | Specifies whether to digitally sign an AuthnRequest messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status">Status</a></code> | <code>string</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding">UserInfoBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#user_info_binding IdpOidc#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl">UserInfoUrl</a></code> | <code>string</code> | Protected resource endpoint that returns claims about the authenticated user. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding"></a>

```csharp
public string AuthorizationBinding { get; set; }
```

- *Type:* string

The method of making an authorization request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#authorization_binding IdpOidc#authorization_binding}

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; set; }
```

- *Type:* string

IdP Authorization Server (AS) endpoint to request consent from the user and obtain an authorization code grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#authorization_url IdpOidc#authorization_url}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Unique identifier issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#client_id IdpOidc#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Client secret issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#client_secret IdpOidc#client_secret}

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

URI that identifies the issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#issuer_url IdpOidc#issuer_url}

---

##### `JwksBinding`<sup>Required</sup> <a name="JwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding"></a>

```csharp
public string JwksBinding { get; set; }
```

- *Type:* string

The method of making a request for the OIDC JWKS. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#jwks_binding IdpOidc#jwks_binding}

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; set; }
```

- *Type:* string

Endpoint where the keys signer publishes its keys in a JWK Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#jwks_url IdpOidc#jwks_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#name IdpOidc#name}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The scopes of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#scopes IdpOidc#scopes}

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding"></a>

```csharp
public string TokenBinding { get; set; }
```

- *Type:* string

The method of making a token request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#token_binding IdpOidc#token_binding}

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

IdP Authorization Server (AS) endpoint to exchange the authorization code grant for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#token_url IdpOidc#token_url}

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; set; }
```

- *Type:* string

Specifies the account linking action for an IdP user. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#account_link_action IdpOidc#account_link_action}

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; set; }
```

- *Type:* string[]

Group memberships to determine link candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; set; }
```

- *Type:* string

Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction"></a>

```csharp
public string GroupsAction { get; set; }
```

- *Type:* string

Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_action IdpOidc#groups_action}

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; set; }
```

- *Type:* string[]

List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_assignment IdpOidc#groups_assignment}

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; set; }
```

- *Type:* string

IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_attribute IdpOidc#groups_attribute}

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; set; }
```

- *Type:* string[]

Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_filter IdpOidc#groups_filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#id IdpOidc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode"></a>

```csharp
public string IssuerMode { get; set; }
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, a custom domain URL, or dynamic.

It can be `ORG_URL`, `CUSTOM_URL`, or `DYNAMIC`. Default: `ORG_URL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#issuer_mode IdpOidc#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; set; }
```

- *Type:* double

Maximum allowable clock-skew when processing messages from the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}

---

##### `PkceRequired`<sup>Optional</sup> <a name="PkceRequired" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.pkceRequired"></a>

```csharp
public object PkceRequired { get; set; }
```

- *Type:* object

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/idps/#oauth-2-0-and-openid-connect-client-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#pkce_required IdpOidc#pkce_required}

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; set; }
```

- *Type:* object

Determines if the IdP should act as a source of truth for user profile attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#profile_master IdpOidc#profile_master}

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OIDC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#protocol_type IdpOidc#protocol_type}

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; set; }
```

- *Type:* string

Provisioning action for an IdP user during authentication. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#provisioning_action IdpOidc#provisioning_action}

---

##### `RequestSignatureAlgorithm`<sup>Optional</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm"></a>

```csharp
public string RequestSignatureAlgorithm { get; set; }
```

- *Type:* string

The HMAC Signature Algorithm used when signing an authorization request.

Defaults to `HS256`. It can be `HS256`, `HS384`, `HS512`, `SHA-256`. `RS256`, `RS384`, or `RS512`. NOTE: `SHA-256` an undocumented legacy value and not continue to be valid. See API docs https://developer.okta.com/docs/reference/api/idps/#oidc-request-signature-algorithm-object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}

---

##### `RequestSignatureScope`<sup>Optional</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope"></a>

```csharp
public string RequestSignatureScope { get; set; }
```

- *Type:* string

Specifies whether to digitally sign an AuthnRequest messages to the IdP.

Defaults to `REQUEST`. It can be `REQUEST` or `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#status IdpOidc#status}

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; set; }
```

- *Type:* string

Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; set; }
```

- *Type:* string

Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username.

By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#subject_match_type IdpOidc#subject_match_type}

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; set; }
```

- *Type:* string

Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#suspended_action IdpOidc#suspended_action}

---

##### `UserInfoBinding`<sup>Optional</sup> <a name="UserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding"></a>

```csharp
public string UserInfoBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#user_info_binding IdpOidc#user_info_binding}.

---

##### `UserInfoUrl`<sup>Optional</sup> <a name="UserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl"></a>

```csharp
public string UserInfoUrl { get; set; }
```

- *Type:* string

Protected resource endpoint that returns claims about the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#user_info_url IdpOidc#user_info_url}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#username_template IdpOidc#username_template}

---



