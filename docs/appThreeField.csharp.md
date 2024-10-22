# `appThreeField` Submodule <a name="`appThreeField` Submodule" id="@cdktf/provider-okta.appThreeField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppThreeField <a name="AppThreeField" id="@cdktf/provider-okta.appThreeField.AppThreeField"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field okta_app_three_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppThreeField(Construct Scope, string Id, AppThreeFieldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig">AppThreeFieldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig">AppThreeFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetCredentialsScheme">ResetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetRevealPassword">ResetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appThreeField.AppThreeField.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appThreeField.AppThreeField.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appThreeField.AppThreeField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appThreeField.AppThreeField.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appThreeField.AppThreeField.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appThreeField.AppThreeField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appThreeField.AppThreeField.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appThreeField.AppThreeField.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appThreeField.AppThreeField.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appThreeField.AppThreeField.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appThreeField.AppThreeField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appThreeField.AppThreeField.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appThreeField.AppThreeField.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appThreeField.AppThreeField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appThreeField.AppThreeField.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts"></a>

```csharp
private void PutTimeouts(AppThreeFieldTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetCredentialsScheme` <a name="ResetCredentialsScheme" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetCredentialsScheme"></a>

```csharp
private void ResetCredentialsScheme()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetRevealPassword` <a name="ResetRevealPassword" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetRevealPassword"></a>

```csharp
private void ResetRevealPassword()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedPassword"></a>

```csharp
private void ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedUsername"></a>

```csharp
private void ResetSharedUsername()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUrlRegex"></a>

```csharp
private void ResetUrlRegex()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppThreeField resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appThreeField.AppThreeField.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppThreeField.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appThreeField.AppThreeField.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppThreeField.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppThreeField.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppThreeField.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppThreeField resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppThreeField to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppThreeField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppThreeField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference">AppThreeFieldTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelectorInput">ButtonSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsSchemeInput">CredentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelectorInput">ExtraFieldSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValueInput">ExtraFieldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelectorInput">PasswordSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPasswordInput">RevealPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegexInput">UrlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelectorInput">UsernameSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelector">ButtonSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelector">ExtraFieldSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValue">ExtraFieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelector">PasswordSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPassword">RevealPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegex">UrlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelector">UsernameSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.timeouts"></a>

```csharp
public AppThreeFieldTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference">AppThreeFieldTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `ButtonSelectorInput`<sup>Optional</sup> <a name="ButtonSelectorInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelectorInput"></a>

```csharp
public string ButtonSelectorInput { get; }
```

- *Type:* string

---

##### `CredentialsSchemeInput`<sup>Optional</sup> <a name="CredentialsSchemeInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsSchemeInput"></a>

```csharp
public string CredentialsSchemeInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `ExtraFieldSelectorInput`<sup>Optional</sup> <a name="ExtraFieldSelectorInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelectorInput"></a>

```csharp
public string ExtraFieldSelectorInput { get; }
```

- *Type:* string

---

##### `ExtraFieldValueInput`<sup>Optional</sup> <a name="ExtraFieldValueInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValueInput"></a>

```csharp
public string ExtraFieldValueInput { get; }
```

- *Type:* string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `PasswordSelectorInput`<sup>Optional</sup> <a name="PasswordSelectorInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelectorInput"></a>

```csharp
public string PasswordSelectorInput { get; }
```

- *Type:* string

---

##### `RevealPasswordInput`<sup>Optional</sup> <a name="RevealPasswordInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPasswordInput"></a>

```csharp
public object RevealPasswordInput { get; }
```

- *Type:* object

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPasswordInput"></a>

```csharp
public string SharedPasswordInput { get; }
```

- *Type:* string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsernameInput"></a>

```csharp
public string SharedUsernameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegexInput"></a>

```csharp
public string UrlRegexInput { get; }
```

- *Type:* string

---

##### `UsernameSelectorInput`<sup>Optional</sup> <a name="UsernameSelectorInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelectorInput"></a>

```csharp
public string UsernameSelectorInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `ButtonSelector`<sup>Required</sup> <a name="ButtonSelector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelector"></a>

```csharp
public string ButtonSelector { get; }
```

- *Type:* string

---

##### `CredentialsScheme`<sup>Required</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `ExtraFieldSelector`<sup>Required</sup> <a name="ExtraFieldSelector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelector"></a>

```csharp
public string ExtraFieldSelector { get; }
```

- *Type:* string

---

##### `ExtraFieldValue`<sup>Required</sup> <a name="ExtraFieldValue" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValue"></a>

```csharp
public string ExtraFieldValue { get; }
```

- *Type:* string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `PasswordSelector`<sup>Required</sup> <a name="PasswordSelector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelector"></a>

```csharp
public string PasswordSelector { get; }
```

- *Type:* string

---

##### `RevealPassword`<sup>Required</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPassword"></a>

```csharp
public object RevealPassword { get; }
```

- *Type:* object

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; }
```

- *Type:* string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegex"></a>

```csharp
public string UrlRegex { get; }
```

- *Type:* string

---

##### `UsernameSelector`<sup>Required</sup> <a name="UsernameSelector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelector"></a>

```csharp
public string UsernameSelector { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppThreeFieldConfig <a name="AppThreeFieldConfig" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppThreeFieldConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ButtonSelector,
    string ExtraFieldSelector,
    string ExtraFieldValue,
    string Label,
    string PasswordSelector,
    string Url,
    string UsernameSelector,
    string AccessibilityErrorRedirectUrl = null,
    string AccessibilityLoginRedirectUrl = null,
    object AccessibilitySelfService = null,
    string AdminNote = null,
    string AppLinksJson = null,
    object AutoSubmitToolbar = null,
    string CredentialsScheme = null,
    string EnduserNote = null,
    object HideIos = null,
    object HideWeb = null,
    string Id = null,
    string Logo = null,
    object RevealPassword = null,
    string SharedPassword = null,
    string SharedUsername = null,
    string Status = null,
    AppThreeFieldTimeouts Timeouts = null,
    string UrlRegex = null,
    string UserNameTemplate = null,
    string UserNameTemplatePushStatus = null,
    string UserNameTemplateSuffix = null,
    string UserNameTemplateType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.buttonSelector">ButtonSelector</a></code> | <code>string</code> | Login button field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldSelector">ExtraFieldSelector</a></code> | <code>string</code> | Extra field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldValue">ExtraFieldValue</a></code> | <code>string</code> | Value for extra form field. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.label">Label</a></code> | <code>string</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.passwordSelector">PasswordSelector</a></code> | <code>string</code> | Login password field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.url">Url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.usernameSelector">UsernameSelector</a></code> | <code>string</code> | Login username field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#id AppThreeField#id}. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.logo">Logo</a></code> | <code>string</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.revealPassword">RevealPassword</a></code> | <code>object</code> | Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.status">Status</a></code> | <code>string</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.urlRegex">UrlRegex</a></code> | <code>string</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. Default: `BUILT_IN`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ButtonSelector`<sup>Required</sup> <a name="ButtonSelector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.buttonSelector"></a>

```csharp
public string ButtonSelector { get; set; }
```

- *Type:* string

Login button field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#button_selector AppThreeField#button_selector}

---

##### `ExtraFieldSelector`<sup>Required</sup> <a name="ExtraFieldSelector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldSelector"></a>

```csharp
public string ExtraFieldSelector { get; set; }
```

- *Type:* string

Extra field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#extra_field_selector AppThreeField#extra_field_selector}

---

##### `ExtraFieldValue`<sup>Required</sup> <a name="ExtraFieldValue" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldValue"></a>

```csharp
public string ExtraFieldValue { get; set; }
```

- *Type:* string

Value for extra form field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#extra_field_value AppThreeField#extra_field_value}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#label AppThreeField#label}

---

##### `PasswordSelector`<sup>Required</sup> <a name="PasswordSelector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.passwordSelector"></a>

```csharp
public string PasswordSelector { get; set; }
```

- *Type:* string

Login password field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#password_selector AppThreeField#password_selector}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#url AppThreeField#url}

---

##### `UsernameSelector`<sup>Required</sup> <a name="UsernameSelector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.usernameSelector"></a>

```csharp
public string UsernameSelector { get; set; }
```

- *Type:* string

Login username field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#username_selector AppThreeField#username_selector}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#accessibility_error_redirect_url AppThreeField#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#accessibility_login_redirect_url AppThreeField#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#accessibility_self_service AppThreeField#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#admin_note AppThreeField#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#app_links_json AppThreeField#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#auto_submit_toolbar AppThreeField#auto_submit_toolbar}

---

##### `CredentialsScheme`<sup>Optional</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; set; }
```

- *Type:* string

Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#credentials_scheme AppThreeField#credentials_scheme}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#enduser_note AppThreeField#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#hide_ios AppThreeField#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#hide_web AppThreeField#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#id AppThreeField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#logo AppThreeField#logo}

---

##### `RevealPassword`<sup>Optional</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.revealPassword"></a>

```csharp
public object RevealPassword { get; set; }
```

- *Type:* object

Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#reveal_password AppThreeField#reveal_password}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; set; }
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#shared_password AppThreeField#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; set; }
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#shared_username AppThreeField#shared_username}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#status AppThreeField#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.timeouts"></a>

```csharp
public AppThreeFieldTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#timeouts AppThreeField#timeouts}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.urlRegex"></a>

```csharp
public string UrlRegex { get; set; }
```

- *Type:* string

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#url_regex AppThreeField#url_regex}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#user_name_template AppThreeField#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#user_name_template_push_status AppThreeField#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#user_name_template_suffix AppThreeField#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#user_name_template_type AppThreeField#user_name_template_type}

---

### AppThreeFieldTimeouts <a name="AppThreeFieldTimeouts" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppThreeFieldTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#create AppThreeField#create}. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#read AppThreeField#read}. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#update AppThreeField#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#create AppThreeField#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#read AppThreeField#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/app_three_field#update AppThreeField#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppThreeFieldTimeoutsOutputReference <a name="AppThreeFieldTimeoutsOutputReference" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppThreeFieldTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



