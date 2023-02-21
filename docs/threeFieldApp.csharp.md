# `threeFieldApp` Submodule <a name="`threeFieldApp` Submodule" id="@cdktf/provider-okta.threeFieldApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ThreeFieldApp <a name="ThreeFieldApp" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/three_field_app okta_three_field_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThreeFieldApp(Construct Scope, string Id, ThreeFieldAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig">ThreeFieldAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig">ThreeFieldAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetCredentialsScheme">ResetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetRevealPassword">ResetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts"></a>

```csharp
private void PutTimeouts(ThreeFieldAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers"></a>

```csharp
private void PutUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetCredentialsScheme` <a name="ResetCredentialsScheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetCredentialsScheme"></a>

```csharp
private void ResetCredentialsScheme()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetRevealPassword` <a name="ResetRevealPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetRevealPassword"></a>

```csharp
private void ResetRevealPassword()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedPassword"></a>

```csharp
private void ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedUsername"></a>

```csharp
private void ResetSharedUsername()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUrlRegex"></a>

```csharp
private void ResetUrlRegex()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUsers"></a>

```csharp
private void ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

ThreeFieldApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

ThreeFieldApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

ThreeFieldApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference">ThreeFieldAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList">ThreeFieldAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelectorInput">ButtonSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsSchemeInput">CredentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelectorInput">ExtraFieldSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValueInput">ExtraFieldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelectorInput">PasswordSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPasswordInput">RevealPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegexInput">UrlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelectorInput">UsernameSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usersInput">UsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelector">ButtonSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelector">ExtraFieldSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValue">ExtraFieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelector">PasswordSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPassword">RevealPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegex">UrlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelector">UsernameSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeouts"></a>

```csharp
public ThreeFieldAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference">ThreeFieldAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.users"></a>

```csharp
public ThreeFieldAppUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList">ThreeFieldAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `ButtonSelectorInput`<sup>Optional</sup> <a name="ButtonSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelectorInput"></a>

```csharp
public string ButtonSelectorInput { get; }
```

- *Type:* string

---

##### `CredentialsSchemeInput`<sup>Optional</sup> <a name="CredentialsSchemeInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsSchemeInput"></a>

```csharp
public string CredentialsSchemeInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `ExtraFieldSelectorInput`<sup>Optional</sup> <a name="ExtraFieldSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelectorInput"></a>

```csharp
public string ExtraFieldSelectorInput { get; }
```

- *Type:* string

---

##### `ExtraFieldValueInput`<sup>Optional</sup> <a name="ExtraFieldValueInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValueInput"></a>

```csharp
public string ExtraFieldValueInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `PasswordSelectorInput`<sup>Optional</sup> <a name="PasswordSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelectorInput"></a>

```csharp
public string PasswordSelectorInput { get; }
```

- *Type:* string

---

##### `RevealPasswordInput`<sup>Optional</sup> <a name="RevealPasswordInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPasswordInput"></a>

```csharp
public object RevealPasswordInput { get; }
```

- *Type:* object

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPasswordInput"></a>

```csharp
public string SharedPasswordInput { get; }
```

- *Type:* string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsernameInput"></a>

```csharp
public string SharedUsernameInput { get; }
```

- *Type:* string

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegexInput"></a>

```csharp
public string UrlRegexInput { get; }
```

- *Type:* string

---

##### `UsernameSelectorInput`<sup>Optional</sup> <a name="UsernameSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelectorInput"></a>

```csharp
public string UsernameSelectorInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usersInput"></a>

```csharp
public object UsersInput { get; }
```

- *Type:* object

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `ButtonSelector`<sup>Required</sup> <a name="ButtonSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelector"></a>

```csharp
public string ButtonSelector { get; }
```

- *Type:* string

---

##### `CredentialsScheme`<sup>Required</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `ExtraFieldSelector`<sup>Required</sup> <a name="ExtraFieldSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelector"></a>

```csharp
public string ExtraFieldSelector { get; }
```

- *Type:* string

---

##### `ExtraFieldValue`<sup>Required</sup> <a name="ExtraFieldValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValue"></a>

```csharp
public string ExtraFieldValue { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `PasswordSelector`<sup>Required</sup> <a name="PasswordSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelector"></a>

```csharp
public string PasswordSelector { get; }
```

- *Type:* string

---

##### `RevealPassword`<sup>Required</sup> <a name="RevealPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPassword"></a>

```csharp
public object RevealPassword { get; }
```

- *Type:* object

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; }
```

- *Type:* string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; }
```

- *Type:* string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegex"></a>

```csharp
public string UrlRegex { get; }
```

- *Type:* string

---

##### `UsernameSelector`<sup>Required</sup> <a name="UsernameSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelector"></a>

```csharp
public string UsernameSelector { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ThreeFieldAppConfig <a name="ThreeFieldAppConfig" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThreeFieldAppConfig {
    object Connection = null,
    double Count = null,
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
    string[] Groups = null,
    object HideIos = null,
    object HideWeb = null,
    string Id = null,
    string Logo = null,
    object RevealPassword = null,
    string SharedPassword = null,
    string SharedUsername = null,
    object SkipGroups = null,
    object SkipUsers = null,
    string Status = null,
    ThreeFieldAppTimeouts Timeouts = null,
    string UrlRegex = null,
    string UserNameTemplate = null,
    string UserNameTemplatePushStatus = null,
    string UserNameTemplateSuffix = null,
    string UserNameTemplateType = null,
    object Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.buttonSelector">ButtonSelector</a></code> | <code>string</code> | Login button field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldSelector">ExtraFieldSelector</a></code> | <code>string</code> | Extra field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldValue">ExtraFieldValue</a></code> | <code>string</code> | Value for extra form field. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.passwordSelector">PasswordSelector</a></code> | <code>string</code> | Login password field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.url">Url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.usernameSelector">UsernameSelector</a></code> | <code>string</code> | Login username field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.revealPassword">RevealPassword</a></code> | <code>object</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.urlRegex">UrlRegex</a></code> | <code>string</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.users">Users</a></code> | <code>object</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ButtonSelector`<sup>Required</sup> <a name="ButtonSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.buttonSelector"></a>

```csharp
public string ButtonSelector { get; set; }
```

- *Type:* string

Login button field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#button_selector ThreeFieldApp#button_selector}

---

##### `ExtraFieldSelector`<sup>Required</sup> <a name="ExtraFieldSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldSelector"></a>

```csharp
public string ExtraFieldSelector { get; set; }
```

- *Type:* string

Extra field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_selector ThreeFieldApp#extra_field_selector}

---

##### `ExtraFieldValue`<sup>Required</sup> <a name="ExtraFieldValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldValue"></a>

```csharp
public string ExtraFieldValue { get; set; }
```

- *Type:* string

Value for extra form field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_value ThreeFieldApp#extra_field_value}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#label ThreeFieldApp#label}

---

##### `PasswordSelector`<sup>Required</sup> <a name="PasswordSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.passwordSelector"></a>

```csharp
public string PasswordSelector { get; set; }
```

- *Type:* string

Login password field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#password_selector ThreeFieldApp#password_selector}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url ThreeFieldApp#url}

---

##### `UsernameSelector`<sup>Required</sup> <a name="UsernameSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.usernameSelector"></a>

```csharp
public string UsernameSelector { get; set; }
```

- *Type:* string

Login username field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#username_selector ThreeFieldApp#username_selector}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_error_redirect_url ThreeFieldApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_login_redirect_url ThreeFieldApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_self_service ThreeFieldApp#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#admin_note ThreeFieldApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#app_links_json ThreeFieldApp#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#auto_submit_toolbar ThreeFieldApp#auto_submit_toolbar}

---

##### `CredentialsScheme`<sup>Optional</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; set; }
```

- *Type:* string

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#credentials_scheme ThreeFieldApp#credentials_scheme}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#enduser_note ThreeFieldApp#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#groups ThreeFieldApp#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_ios ThreeFieldApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_web ThreeFieldApp#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#logo ThreeFieldApp#logo}

---

##### `RevealPassword`<sup>Optional</sup> <a name="RevealPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.revealPassword"></a>

```csharp
public object RevealPassword { get; set; }
```

- *Type:* object

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#reveal_password ThreeFieldApp#reveal_password}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; set; }
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_password ThreeFieldApp#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; set; }
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_username ThreeFieldApp#shared_username}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_groups ThreeFieldApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_users ThreeFieldApp#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#status ThreeFieldApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.timeouts"></a>

```csharp
public ThreeFieldAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#timeouts ThreeFieldApp#timeouts}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.urlRegex"></a>

```csharp
public string UrlRegex { get; set; }
```

- *Type:* string

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url_regex ThreeFieldApp#url_regex}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template ThreeFieldApp#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_push_status ThreeFieldApp#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_suffix ThreeFieldApp#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_type ThreeFieldApp#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.users"></a>

```csharp
public object Users { get; set; }
```

- *Type:* object

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#users ThreeFieldApp#users}

---

### ThreeFieldAppTimeouts <a name="ThreeFieldAppTimeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThreeFieldAppTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#create ThreeFieldApp#create}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#read ThreeFieldApp#read}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#update ThreeFieldApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#create ThreeFieldApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#read ThreeFieldApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#update ThreeFieldApp#update}.

---

### ThreeFieldAppUsers <a name="ThreeFieldAppUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThreeFieldAppUsers {
    string Id = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.id">Id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.password">Password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.username">Username</a></code> | <code>string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#password ThreeFieldApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#username ThreeFieldApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ThreeFieldAppTimeoutsOutputReference <a name="ThreeFieldAppTimeoutsOutputReference" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThreeFieldAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ThreeFieldAppUsersList <a name="ThreeFieldAppUsersList" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThreeFieldAppUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get"></a>

```csharp
private ThreeFieldAppUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ThreeFieldAppUsersOutputReference <a name="ThreeFieldAppUsersOutputReference" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThreeFieldAppUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



