# `appSaml` Submodule <a name="`appSaml` Submodule" id="@cdktf/provider-okta.appSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSaml <a name="AppSaml" id="@cdktf/provider-okta.appSaml.AppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSaml(Construct Scope, string Id, AppSamlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig">AppSamlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlConfig">AppSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements">PutAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints">ResetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned">ResetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements">ResetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef">ResetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState">ResetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm">ResetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn">ResetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer">ResetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId">ResetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid">ResetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp">ResetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed">ResetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned">ResetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled">ResetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion">ResetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate">ResetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer">ResetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl">ResetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer">ResetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl">ResetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat">ResetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate">ResetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSaml.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appSaml.AppSaml.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSaml.AppSaml.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appSaml.AppSaml.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appSaml.AppSaml.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSaml.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appSaml.AppSaml.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSaml.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributeStatements` <a name="PutAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements"></a>

```csharp
private void PutAttributeStatements(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts"></a>

```csharp
private void PutTimeouts(AppSamlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAcsEndpoints` <a name="ResetAcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints"></a>

```csharp
private void ResetAcsEndpoints()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson"></a>

```csharp
private void ResetAppSettingsJson()
```

##### `ResetAssertionSigned` <a name="ResetAssertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned"></a>

```csharp
private void ResetAssertionSigned()
```

##### `ResetAttributeStatements` <a name="ResetAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements"></a>

```csharp
private void ResetAttributeStatements()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-okta.appSaml.AppSaml.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy"></a>

```csharp
private void ResetAuthenticationPolicy()
```

##### `ResetAuthnContextClassRef` <a name="ResetAuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef"></a>

```csharp
private void ResetAuthnContextClassRef()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetDefaultRelayState` <a name="ResetDefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState"></a>

```csharp
private void ResetDefaultRelayState()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-okta.appSaml.AppSaml.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetDigestAlgorithm` <a name="ResetDigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm"></a>

```csharp
private void ResetDigestAlgorithm()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetHonorForceAuthn` <a name="ResetHonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn"></a>

```csharp
private void ResetHonorForceAuthn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSaml.AppSaml.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpIssuer` <a name="ResetIdpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer"></a>

```csharp
private void ResetIdpIssuer()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment"></a>

```csharp
private void ResetImplicitAssignment()
```

##### `ResetInlineHookId` <a name="ResetInlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId"></a>

```csharp
private void ResetInlineHookId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetKeyYearsValid` <a name="ResetKeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid"></a>

```csharp
private void ResetKeyYearsValid()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appSaml.AppSaml.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetPreconfiguredApp` <a name="ResetPreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp"></a>

```csharp
private void ResetPreconfiguredApp()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktf/provider-okta.appSaml.AppSaml.resetRecipient"></a>

```csharp
private void ResetRecipient()
```

##### `ResetRequestCompressed` <a name="ResetRequestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed"></a>

```csharp
private void ResetRequestCompressed()
```

##### `ResetResponseSigned` <a name="ResetResponseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned"></a>

```csharp
private void ResetResponseSigned()
```

##### `ResetSamlSignedRequestEnabled` <a name="ResetSamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled"></a>

```csharp
private void ResetSamlSignedRequestEnabled()
```

##### `ResetSamlVersion` <a name="ResetSamlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion"></a>

```csharp
private void ResetSamlVersion()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm"></a>

```csharp
private void ResetSignatureAlgorithm()
```

##### `ResetSingleLogoutCertificate` <a name="ResetSingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate"></a>

```csharp
private void ResetSingleLogoutCertificate()
```

##### `ResetSingleLogoutIssuer` <a name="ResetSingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer"></a>

```csharp
private void ResetSingleLogoutIssuer()
```

##### `ResetSingleLogoutUrl` <a name="ResetSingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl"></a>

```csharp
private void ResetSingleLogoutUrl()
```

##### `ResetSpIssuer` <a name="ResetSpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer"></a>

```csharp
private void ResetSpIssuer()
```

##### `ResetSsoUrl` <a name="ResetSsoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl"></a>

```csharp
private void ResetSsoUrl()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubjectNameIdFormat` <a name="ResetSubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat"></a>

```csharp
private void ResetSubjectNameIdFormat()
```

##### `ResetSubjectNameIdTemplate` <a name="ResetSubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate"></a>

```csharp
private void ResetSubjectNameIdTemplate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSaml.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSaml.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSaml.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSaml.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppSaml to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements">AttributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl">EmbedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityKey">EntityKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl">EntityUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.features">Features</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding">HttpPostBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding">HttpRedirectBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl">MetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput">AcsEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput">AssertionSignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput">AttributeStatementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput">AuthnContextClassRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput">DefaultRelayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput">DigestAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput">HonorForceAuthnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput">IdpIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput">InlineHookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput">KeyYearsValidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput">PreconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput">RecipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput">RequestCompressedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput">ResponseSignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput">SamlSignedRequestEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput">SamlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput">SingleLogoutCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput">SingleLogoutIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput">SingleLogoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput">SpIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput">SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput">SubjectNameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput">SubjectNameIdTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints">AcsEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned">AssertionSigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState">DefaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer">IdpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId">InlineHookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid">KeyYearsValid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipient">Recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed">RequestCompressed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned">ResponseSigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion">SamlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer">SpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSaml.AppSaml.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSaml.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSaml.AppSaml.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSaml.AppSaml.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSaml.AppSaml.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSaml.AppSaml.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSaml.AppSaml.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttributeStatements`<sup>Required</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements"></a>

```csharp
public AppSamlAttributeStatementsList AttributeStatements { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `EmbedUrl`<sup>Required</sup> <a name="EmbedUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl"></a>

```csharp
public string EmbedUrl { get; }
```

- *Type:* string

---

##### `EntityKey`<sup>Required</sup> <a name="EntityKey" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityKey"></a>

```csharp
public string EntityKey { get; }
```

- *Type:* string

---

##### `EntityUrl`<sup>Required</sup> <a name="EntityUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl"></a>

```csharp
public string EntityUrl { get; }
```

- *Type:* string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-okta.appSaml.AppSaml.property.features"></a>

```csharp
public string[] Features { get; }
```

- *Type:* string[]

---

##### `HttpPostBinding`<sup>Required</sup> <a name="HttpPostBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding"></a>

```csharp
public string HttpPostBinding { get; }
```

- *Type:* string

---

##### `HttpRedirectBinding`<sup>Required</sup> <a name="HttpRedirectBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding"></a>

```csharp
public string HttpRedirectBinding { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-okta.appSaml.AppSaml.property.keys"></a>

```csharp
public AppSamlKeysList Keys { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl"></a>

```csharp
public string MetadataUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSaml.AppSaml.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeouts"></a>

```csharp
public AppSamlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AcsEndpointsInput`<sup>Optional</sup> <a name="AcsEndpointsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput"></a>

```csharp
public string[] AcsEndpointsInput { get; }
```

- *Type:* string[]

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput"></a>

```csharp
public string AppSettingsJsonInput { get; }
```

- *Type:* string

---

##### `AssertionSignedInput`<sup>Optional</sup> <a name="AssertionSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput"></a>

```csharp
public object AssertionSignedInput { get; }
```

- *Type:* object

---

##### `AttributeStatementsInput`<sup>Optional</sup> <a name="AttributeStatementsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput"></a>

```csharp
public object AttributeStatementsInput { get; }
```

- *Type:* object

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput"></a>

```csharp
public string AuthenticationPolicyInput { get; }
```

- *Type:* string

---

##### `AuthnContextClassRefInput`<sup>Optional</sup> <a name="AuthnContextClassRefInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput"></a>

```csharp
public string AuthnContextClassRefInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `DefaultRelayStateInput`<sup>Optional</sup> <a name="DefaultRelayStateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput"></a>

```csharp
public string DefaultRelayStateInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DigestAlgorithmInput`<sup>Optional</sup> <a name="DigestAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput"></a>

```csharp
public string DigestAlgorithmInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `HonorForceAuthnInput`<sup>Optional</sup> <a name="HonorForceAuthnInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput"></a>

```csharp
public object HonorForceAuthnInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpIssuerInput`<sup>Optional</sup> <a name="IdpIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput"></a>

```csharp
public string IdpIssuerInput { get; }
```

- *Type:* string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput"></a>

```csharp
public object ImplicitAssignmentInput { get; }
```

- *Type:* object

---

##### `InlineHookIdInput`<sup>Optional</sup> <a name="InlineHookIdInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput"></a>

```csharp
public string InlineHookIdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyYearsValidInput`<sup>Optional</sup> <a name="KeyYearsValidInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput"></a>

```csharp
public double KeyYearsValidInput { get; }
```

- *Type:* double

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `PreconfiguredAppInput`<sup>Optional</sup> <a name="PreconfiguredAppInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput"></a>

```csharp
public string PreconfiguredAppInput { get; }
```

- *Type:* string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput"></a>

```csharp
public string RecipientInput { get; }
```

- *Type:* string

---

##### `RequestCompressedInput`<sup>Optional</sup> <a name="RequestCompressedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput"></a>

```csharp
public object RequestCompressedInput { get; }
```

- *Type:* object

---

##### `ResponseSignedInput`<sup>Optional</sup> <a name="ResponseSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput"></a>

```csharp
public object ResponseSignedInput { get; }
```

- *Type:* object

---

##### `SamlSignedRequestEnabledInput`<sup>Optional</sup> <a name="SamlSignedRequestEnabledInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput"></a>

```csharp
public object SamlSignedRequestEnabledInput { get; }
```

- *Type:* object

---

##### `SamlVersionInput`<sup>Optional</sup> <a name="SamlVersionInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput"></a>

```csharp
public string SamlVersionInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SingleLogoutCertificateInput`<sup>Optional</sup> <a name="SingleLogoutCertificateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput"></a>

```csharp
public string SingleLogoutCertificateInput { get; }
```

- *Type:* string

---

##### `SingleLogoutIssuerInput`<sup>Optional</sup> <a name="SingleLogoutIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput"></a>

```csharp
public string SingleLogoutIssuerInput { get; }
```

- *Type:* string

---

##### `SingleLogoutUrlInput`<sup>Optional</sup> <a name="SingleLogoutUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput"></a>

```csharp
public string SingleLogoutUrlInput { get; }
```

- *Type:* string

---

##### `SpIssuerInput`<sup>Optional</sup> <a name="SpIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput"></a>

```csharp
public string SpIssuerInput { get; }
```

- *Type:* string

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput"></a>

```csharp
public string SsoUrlInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubjectNameIdFormatInput`<sup>Optional</sup> <a name="SubjectNameIdFormatInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput"></a>

```csharp
public string SubjectNameIdFormatInput { get; }
```

- *Type:* string

---

##### `SubjectNameIdTemplateInput`<sup>Optional</sup> <a name="SubjectNameIdTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput"></a>

```csharp
public string SubjectNameIdTemplateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AcsEndpoints`<sup>Required</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints"></a>

```csharp
public string[] AcsEndpoints { get; }
```

- *Type:* string[]

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; }
```

- *Type:* string

---

##### `AssertionSigned`<sup>Required</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned"></a>

```csharp
public object AssertionSigned { get; }
```

- *Type:* object

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.appSaml.AppSaml.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; }
```

- *Type:* string

---

##### `AuthnContextClassRef`<sup>Required</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef"></a>

```csharp
public string AuthnContextClassRef { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState"></a>

```csharp
public string DefaultRelayState { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-okta.appSaml.AppSaml.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DigestAlgorithm`<sup>Required</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm"></a>

```csharp
public string DigestAlgorithm { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `HonorForceAuthn`<sup>Required</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn"></a>

```csharp
public object HonorForceAuthn { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSaml.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpIssuer`<sup>Required</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer"></a>

```csharp
public string IdpIssuer { get; }
```

- *Type:* string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; }
```

- *Type:* object

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId"></a>

```csharp
public string InlineHookId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyYearsValid`<sup>Required</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid"></a>

```csharp
public double KeyYearsValid { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSaml.AppSaml.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appSaml.AppSaml.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `PreconfiguredApp`<sup>Required</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp"></a>

```csharp
public string PreconfiguredApp { get; }
```

- *Type:* string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipient"></a>

```csharp
public string Recipient { get; }
```

- *Type:* string

---

##### `RequestCompressed`<sup>Required</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed"></a>

```csharp
public object RequestCompressed { get; }
```

- *Type:* object

---

##### `ResponseSigned`<sup>Required</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned"></a>

```csharp
public object ResponseSigned { get; }
```

- *Type:* object

---

##### `SamlSignedRequestEnabled`<sup>Required</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled"></a>

```csharp
public object SamlSignedRequestEnabled { get; }
```

- *Type:* object

---

##### `SamlVersion`<sup>Required</sup> <a name="SamlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion"></a>

```csharp
public string SamlVersion { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `SingleLogoutCertificate`<sup>Required</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate"></a>

```csharp
public string SingleLogoutCertificate { get; }
```

- *Type:* string

---

##### `SingleLogoutIssuer`<sup>Required</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer"></a>

```csharp
public string SingleLogoutIssuer { get; }
```

- *Type:* string

---

##### `SingleLogoutUrl`<sup>Required</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl"></a>

```csharp
public string SingleLogoutUrl { get; }
```

- *Type:* string

---

##### `SpIssuer`<sup>Required</sup> <a name="SpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer"></a>

```csharp
public string SpIssuer { get; }
```

- *Type:* string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSaml.AppSaml.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectNameIdFormat`<sup>Required</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat"></a>

```csharp
public string SubjectNameIdFormat { get; }
```

- *Type:* string

---

##### `SubjectNameIdTemplate`<sup>Required</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate"></a>

```csharp
public string SubjectNameIdTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSamlAttributeStatements <a name="AppSamlAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlAttributeStatements {
    string Name,
    string FilterType = null,
    string FilterValue = null,
    string Namespace = null,
    string Type = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name">Name</a></code> | <code>string</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType">FilterType</a></code> | <code>string</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue">FilterValue</a></code> | <code>string</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace">Namespace</a></code> | <code>string</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type">Type</a></code> | <code>string</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#values AppSaml#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#name AppSaml#name}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Type of group attribute filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#filter_type AppSaml#filter_type}

---

##### `FilterValue`<sup>Optional</sup> <a name="FilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue"></a>

```csharp
public string FilterValue { get; set; }
```

- *Type:* string

Filter value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#filter_value AppSaml#filter_value}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The name format of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#namespace AppSaml#namespace}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of attribute statements object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#type AppSaml#type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#values AppSaml#values}.

---

### AppSamlConfig <a name="AppSamlConfig" id="@cdktf/provider-okta.appSaml.AppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Label,
    string AccessibilityErrorRedirectUrl = null,
    string AccessibilityLoginRedirectUrl = null,
    object AccessibilitySelfService = null,
    string[] AcsEndpoints = null,
    string AdminNote = null,
    string AppLinksJson = null,
    string AppSettingsJson = null,
    object AssertionSigned = null,
    object AttributeStatements = null,
    string Audience = null,
    string AuthenticationPolicy = null,
    string AuthnContextClassRef = null,
    object AutoSubmitToolbar = null,
    string DefaultRelayState = null,
    string Destination = null,
    string DigestAlgorithm = null,
    string EnduserNote = null,
    object HideIos = null,
    object HideWeb = null,
    object HonorForceAuthn = null,
    string Id = null,
    string IdpIssuer = null,
    object ImplicitAssignment = null,
    string InlineHookId = null,
    string KeyName = null,
    double KeyYearsValid = null,
    string Logo = null,
    string PreconfiguredApp = null,
    string Recipient = null,
    object RequestCompressed = null,
    object ResponseSigned = null,
    object SamlSignedRequestEnabled = null,
    string SamlVersion = null,
    string SignatureAlgorithm = null,
    string SingleLogoutCertificate = null,
    string SingleLogoutIssuer = null,
    string SingleLogoutUrl = null,
    string SpIssuer = null,
    string SsoUrl = null,
    string Status = null,
    string SubjectNameIdFormat = null,
    string SubjectNameIdTemplate = null,
    AppSamlTimeouts Timeouts = null,
    string UserNameTemplate = null,
    string UserNameTemplatePushStatus = null,
    string UserNameTemplateSuffix = null,
    string UserNameTemplateType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints">AcsEndpoints</a></code> | <code>string[]</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned">AssertionSigned</a></code> | <code>object</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements">AttributeStatements</a></code> | <code>object</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience">Audience</a></code> | <code>string</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>string</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState">DefaultRelayState</a></code> | <code>string</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination">Destination</a></code> | <code>string</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>string</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>object</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#id AppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer">IdpIssuer</a></code> | <code>string</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId">InlineHookId</a></code> | <code>string</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName">KeyName</a></code> | <code>string</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid">KeyYearsValid</a></code> | <code>double</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>string</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient">Recipient</a></code> | <code>string</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed">RequestCompressed</a></code> | <code>object</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned">ResponseSigned</a></code> | <code>object</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>object</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion">SamlVersion</a></code> | <code>string</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>string</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>string</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>string</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer">SpIssuer</a></code> | <code>string</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>string</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>string</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#label AppSaml#label}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}

---

##### `AcsEndpoints`<sup>Optional</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints"></a>

```csharp
public string[] AcsEndpoints { get; set; }
```

- *Type:* string[]

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#admin_note AppSaml#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#app_links_json AppSaml#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; set; }
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}

---

##### `AssertionSigned`<sup>Optional</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned"></a>

```csharp
public object AssertionSigned { get; set; }
```

- *Type:* object

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}

---

##### `AttributeStatements`<sup>Optional</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements"></a>

```csharp
public object AttributeStatements { get; set; }
```

- *Type:* object

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#audience AppSaml#audience}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; set; }
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}

---

##### `AuthnContextClassRef`<sup>Optional</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef"></a>

```csharp
public string AuthnContextClassRef { get; set; }
```

- *Type:* string

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}

---

##### `DefaultRelayState`<sup>Optional</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState"></a>

```csharp
public string DefaultRelayState { get; set; }
```

- *Type:* string

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#destination AppSaml#destination}

---

##### `DigestAlgorithm`<sup>Optional</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm"></a>

```csharp
public string DigestAlgorithm { get; set; }
```

- *Type:* string

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#enduser_note AppSaml#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#hide_ios AppSaml#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#hide_web AppSaml#hide_web}

---

##### `HonorForceAuthn`<sup>Optional</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn"></a>

```csharp
public object HonorForceAuthn { get; set; }
```

- *Type:* object

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#id AppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpIssuer`<sup>Optional</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer"></a>

```csharp
public string IdpIssuer { get; set; }
```

- *Type:* string

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; set; }
```

- *Type:* object

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}

---

##### `InlineHookId`<sup>Optional</sup> <a name="InlineHookId" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId"></a>

```csharp
public string InlineHookId { get; set; }
```

- *Type:* string

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#key_name AppSaml#key_name}

---

##### `KeyYearsValid`<sup>Optional</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid"></a>

```csharp
public double KeyYearsValid { get; set; }
```

- *Type:* double

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#logo AppSaml#logo}

---

##### `PreconfiguredApp`<sup>Optional</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp"></a>

```csharp
public string PreconfiguredApp { get; set; }
```

- *Type:* string

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient"></a>

```csharp
public string Recipient { get; set; }
```

- *Type:* string

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#recipient AppSaml#recipient}

---

##### `RequestCompressed`<sup>Optional</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed"></a>

```csharp
public object RequestCompressed { get; set; }
```

- *Type:* object

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#request_compressed AppSaml#request_compressed}

---

##### `ResponseSigned`<sup>Optional</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned"></a>

```csharp
public object ResponseSigned { get; set; }
```

- *Type:* object

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#response_signed AppSaml#response_signed}

---

##### `SamlSignedRequestEnabled`<sup>Optional</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled"></a>

```csharp
public object SamlSignedRequestEnabled { get; set; }
```

- *Type:* object

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}

---

##### `SamlVersion`<sup>Optional</sup> <a name="SamlVersion" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion"></a>

```csharp
public string SamlVersion { get; set; }
```

- *Type:* string

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#saml_version AppSaml#saml_version}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}

---

##### `SingleLogoutCertificate`<sup>Optional</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate"></a>

```csharp
public string SingleLogoutCertificate { get; set; }
```

- *Type:* string

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}

---

##### `SingleLogoutIssuer`<sup>Optional</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer"></a>

```csharp
public string SingleLogoutIssuer { get; set; }
```

- *Type:* string

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}

---

##### `SingleLogoutUrl`<sup>Optional</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl"></a>

```csharp
public string SingleLogoutUrl { get; set; }
```

- *Type:* string

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}

---

##### `SpIssuer`<sup>Optional</sup> <a name="SpIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer"></a>

```csharp
public string SpIssuer { get; set; }
```

- *Type:* string

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}

---

##### `SsoUrl`<sup>Optional</sup> <a name="SsoUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; set; }
```

- *Type:* string

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#sso_url AppSaml#sso_url}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#status AppSaml#status}

---

##### `SubjectNameIdFormat`<sup>Optional</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat"></a>

```csharp
public string SubjectNameIdFormat { get; set; }
```

- *Type:* string

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}

---

##### `SubjectNameIdTemplate`<sup>Optional</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate"></a>

```csharp
public string SubjectNameIdTemplate { get; set; }
```

- *Type:* string

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts"></a>

```csharp
public AppSamlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#timeouts AppSaml#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template AppSaml#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}

---

### AppSamlKeys <a name="AppSamlKeys" id="@cdktf/provider-okta.appSaml.AppSamlKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlKeys {

};
```


### AppSamlTimeouts <a name="AppSamlTimeouts" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#create AppSaml#create}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#read AppSaml#read}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#update AppSaml#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#create AppSaml#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#read AppSaml#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#update AppSaml#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSamlAttributeStatementsList <a name="AppSamlAttributeStatementsList" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlAttributeStatementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get"></a>

```csharp
private AppSamlAttributeStatementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppSamlAttributeStatementsOutputReference <a name="AppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlAttributeStatementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue">ResetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType"></a>

```csharp
private void ResetFilterType()
```

##### `ResetFilterValue` <a name="ResetFilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue"></a>

```csharp
private void ResetFilterValue()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput">FilterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue">FilterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `FilterValueInput`<sup>Optional</sup> <a name="FilterValueInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput"></a>

```csharp
public string FilterValueInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `FilterValue`<sup>Required</sup> <a name="FilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```csharp
public string FilterValue { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppSamlKeysList <a name="AppSamlKeysList" id="@cdktf/provider-okta.appSaml.AppSamlKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get"></a>

```csharp
private AppSamlKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AppSamlKeysOutputReference <a name="AppSamlKeysOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e">E</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty">Kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n">N</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use">Use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C">X5C</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256">X5TS256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e"></a>

```csharp
public string E { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty"></a>

```csharp
public string Kty { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n"></a>

```csharp
public string N { get; }
```

- *Type:* string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use"></a>

```csharp
public string Use { get; }
```

- *Type:* string

---

##### `X5C`<sup>Required</sup> <a name="X5C" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C"></a>

```csharp
public string[] X5C { get; }
```

- *Type:* string[]

---

##### `X5TS256`<sup>Required</sup> <a name="X5TS256" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256"></a>

```csharp
public string X5TS256 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue"></a>

```csharp
public AppSamlKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a>

---


### AppSamlTimeoutsOutputReference <a name="AppSamlTimeoutsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSamlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



