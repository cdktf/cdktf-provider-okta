# `okta_app_shared_credentials`

Refer to the Terraform Registory for docs: [`okta_app_shared_credentials`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials).

# `appSharedCredentials` Submodule <a name="`appSharedCredentials` Submodule" id="@cdktf/provider-okta.appSharedCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSharedCredentials <a name="AppSharedCredentials" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials okta_app_shared_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSharedCredentials(Construct Scope, string Id, AppSharedCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig">AppSharedCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig">AppSharedCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField">ResetButtonField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox">ResetCheckbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField">ResetPasswordField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp">ResetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField">ResetUsernameField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts"></a>

```csharp
private void PutTimeouts(AppSharedCredentialsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetButtonField` <a name="ResetButtonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField"></a>

```csharp
private void ResetButtonField()
```

##### `ResetCheckbox` <a name="ResetCheckbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox"></a>

```csharp
private void ResetCheckbox()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetPasswordField` <a name="ResetPasswordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField"></a>

```csharp
private void ResetPasswordField()
```

##### `ResetPreconfiguredApp` <a name="ResetPreconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp"></a>

```csharp
private void ResetPreconfiguredApp()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl"></a>

```csharp
private void ResetRedirectUrl()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword"></a>

```csharp
private void ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername"></a>

```csharp
private void ResetSharedUsername()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex"></a>

```csharp
private void ResetUrlRegex()
```

##### `ResetUsernameField` <a name="ResetUsernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField"></a>

```csharp
private void ResetUsernameField()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSharedCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSharedCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSharedCredentials.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput">ButtonFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput">CheckboxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput">PasswordFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput">PreconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput">UrlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput">UsernameFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField">ButtonField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox">Checkbox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField">PasswordField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex">UrlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField">UsernameField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts"></a>

```csharp
public AppSharedCredentialsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `ButtonFieldInput`<sup>Optional</sup> <a name="ButtonFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput"></a>

```csharp
public string ButtonFieldInput { get; }
```

- *Type:* string

---

##### `CheckboxInput`<sup>Optional</sup> <a name="CheckboxInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput"></a>

```csharp
public string CheckboxInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `PasswordFieldInput`<sup>Optional</sup> <a name="PasswordFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput"></a>

```csharp
public string PasswordFieldInput { get; }
```

- *Type:* string

---

##### `PreconfiguredAppInput`<sup>Optional</sup> <a name="PreconfiguredAppInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput"></a>

```csharp
public string PreconfiguredAppInput { get; }
```

- *Type:* string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput"></a>

```csharp
public string SharedPasswordInput { get; }
```

- *Type:* string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput"></a>

```csharp
public string SharedUsernameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput"></a>

```csharp
public string UrlRegexInput { get; }
```

- *Type:* string

---

##### `UsernameFieldInput`<sup>Optional</sup> <a name="UsernameFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput"></a>

```csharp
public string UsernameFieldInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `ButtonField`<sup>Required</sup> <a name="ButtonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField"></a>

```csharp
public string ButtonField { get; }
```

- *Type:* string

---

##### `Checkbox`<sup>Required</sup> <a name="Checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox"></a>

```csharp
public string Checkbox { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField"></a>

```csharp
public string PasswordField { get; }
```

- *Type:* string

---

##### `PreconfiguredApp`<sup>Required</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp"></a>

```csharp
public string PreconfiguredApp { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; }
```

- *Type:* string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex"></a>

```csharp
public string UrlRegex { get; }
```

- *Type:* string

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField"></a>

```csharp
public string UsernameField { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSharedCredentialsConfig <a name="AppSharedCredentialsConfig" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSharedCredentialsConfig {
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
    string AdminNote = null,
    string AppLinksJson = null,
    object AutoSubmitToolbar = null,
    string ButtonField = null,
    string Checkbox = null,
    string EnduserNote = null,
    object HideIos = null,
    object HideWeb = null,
    string Id = null,
    string Logo = null,
    string PasswordField = null,
    string PreconfiguredApp = null,
    string RedirectUrl = null,
    string SharedPassword = null,
    string SharedUsername = null,
    string Status = null,
    AppSharedCredentialsTimeouts Timeouts = null,
    string Url = null,
    string UrlRegex = null,
    string UsernameField = null,
    string UserNameTemplate = null,
    string UserNameTemplatePushStatus = null,
    string UserNameTemplateSuffix = null,
    string UserNameTemplateType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField">ButtonField</a></code> | <code>string</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox">Checkbox</a></code> | <code>string</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField">PasswordField</a></code> | <code>string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>string</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | Secondary URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url">Url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex">UrlRegex</a></code> | <code>string</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField">UsernameField</a></code> | <code>string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#label AppSharedCredentials#label}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#accessibility_error_redirect_url AppSharedCredentials#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#accessibility_login_redirect_url AppSharedCredentials#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#accessibility_self_service AppSharedCredentials#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#admin_note AppSharedCredentials#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#app_links_json AppSharedCredentials#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#auto_submit_toolbar AppSharedCredentials#auto_submit_toolbar}

---

##### `ButtonField`<sup>Optional</sup> <a name="ButtonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField"></a>

```csharp
public string ButtonField { get; set; }
```

- *Type:* string

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#button_field AppSharedCredentials#button_field}

---

##### `Checkbox`<sup>Optional</sup> <a name="Checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox"></a>

```csharp
public string Checkbox { get; set; }
```

- *Type:* string

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#checkbox AppSharedCredentials#checkbox}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#enduser_note AppSharedCredentials#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#hide_ios AppSharedCredentials#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#hide_web AppSharedCredentials#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#logo AppSharedCredentials#logo}

---

##### `PasswordField`<sup>Optional</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField"></a>

```csharp
public string PasswordField { get; set; }
```

- *Type:* string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#password_field AppSharedCredentials#password_field}

---

##### `PreconfiguredApp`<sup>Optional</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp"></a>

```csharp
public string PreconfiguredApp { get; set; }
```

- *Type:* string

Preconfigured app name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#preconfigured_app AppSharedCredentials#preconfigured_app}

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

Secondary URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#redirect_url AppSharedCredentials#redirect_url}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; set; }
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#shared_password AppSharedCredentials#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; set; }
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#shared_username AppSharedCredentials#shared_username}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#status AppSharedCredentials#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts"></a>

```csharp
public AppSharedCredentialsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#timeouts AppSharedCredentials#timeouts}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#url AppSharedCredentials#url}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex"></a>

```csharp
public string UrlRegex { get; set; }
```

- *Type:* string

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#url_regex AppSharedCredentials#url_regex}

---

##### `UsernameField`<sup>Optional</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField"></a>

```csharp
public string UsernameField { get; set; }
```

- *Type:* string

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#username_field AppSharedCredentials#username_field}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#user_name_template AppSharedCredentials#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#user_name_template_push_status AppSharedCredentials#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#user_name_template_suffix AppSharedCredentials#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#user_name_template_type AppSharedCredentials#user_name_template_type}

---

### AppSharedCredentialsTimeouts <a name="AppSharedCredentialsTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSharedCredentialsTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#create AppSharedCredentials#create}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#read AppSharedCredentials#read}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#update AppSharedCredentials#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#create AppSharedCredentials#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#read AppSharedCredentials#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/app_shared_credentials#update AppSharedCredentials#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSharedCredentialsTimeoutsOutputReference <a name="AppSharedCredentialsTimeoutsOutputReference" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSharedCredentialsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



