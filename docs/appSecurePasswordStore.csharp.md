# `appSecurePasswordStore` Submodule <a name="`appSecurePasswordStore` Submodule" id="@cdktf/provider-okta.appSecurePasswordStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSecurePasswordStore <a name="AppSecurePasswordStore" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store okta_app_secure_password_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSecurePasswordStore(Construct Scope, string Id, AppSecurePasswordStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig">AppSecurePasswordStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig">AppSecurePasswordStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme">ResetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1">ResetOptionalField1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value">ResetOptionalField1Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2">ResetOptionalField2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value">ResetOptionalField2Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3">ResetOptionalField3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value">ResetOptionalField3Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword">ResetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts"></a>

```csharp
private void PutTimeouts(AppSecurePasswordStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putUsers"></a>

```csharp
private void PutUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetCredentialsScheme` <a name="ResetCredentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme"></a>

```csharp
private void ResetCredentialsScheme()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetOptionalField1` <a name="ResetOptionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1"></a>

```csharp
private void ResetOptionalField1()
```

##### `ResetOptionalField1Value` <a name="ResetOptionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value"></a>

```csharp
private void ResetOptionalField1Value()
```

##### `ResetOptionalField2` <a name="ResetOptionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2"></a>

```csharp
private void ResetOptionalField2()
```

##### `ResetOptionalField2Value` <a name="ResetOptionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value"></a>

```csharp
private void ResetOptionalField2Value()
```

##### `ResetOptionalField3` <a name="ResetOptionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3"></a>

```csharp
private void ResetOptionalField3()
```

##### `ResetOptionalField3Value` <a name="ResetOptionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value"></a>

```csharp
private void ResetOptionalField3Value()
```

##### `ResetRevealPassword` <a name="ResetRevealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword"></a>

```csharp
private void ResetRevealPassword()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword"></a>

```csharp
private void ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername"></a>

```csharp
private void ResetSharedUsername()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUsers"></a>

```csharp
private void ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSecurePasswordStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSecurePasswordStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSecurePasswordStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList">AppSecurePasswordStoreUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput">CredentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input">OptionalField1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput">OptionalField1ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input">OptionalField2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput">OptionalField2ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input">OptionalField3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput">OptionalField3ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput">PasswordFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput">RevealPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput">UsernameFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usersInput">UsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1">OptionalField1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value">OptionalField1Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2">OptionalField2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value">OptionalField2Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3">OptionalField3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value">OptionalField3Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField">PasswordField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword">RevealPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField">UsernameField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts"></a>

```csharp
public AppSecurePasswordStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.users"></a>

```csharp
public AppSecurePasswordStoreUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList">AppSecurePasswordStoreUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `CredentialsSchemeInput`<sup>Optional</sup> <a name="CredentialsSchemeInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput"></a>

```csharp
public string CredentialsSchemeInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `OptionalField1Input`<sup>Optional</sup> <a name="OptionalField1Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input"></a>

```csharp
public string OptionalField1Input { get; }
```

- *Type:* string

---

##### `OptionalField1ValueInput`<sup>Optional</sup> <a name="OptionalField1ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput"></a>

```csharp
public string OptionalField1ValueInput { get; }
```

- *Type:* string

---

##### `OptionalField2Input`<sup>Optional</sup> <a name="OptionalField2Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input"></a>

```csharp
public string OptionalField2Input { get; }
```

- *Type:* string

---

##### `OptionalField2ValueInput`<sup>Optional</sup> <a name="OptionalField2ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput"></a>

```csharp
public string OptionalField2ValueInput { get; }
```

- *Type:* string

---

##### `OptionalField3Input`<sup>Optional</sup> <a name="OptionalField3Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input"></a>

```csharp
public string OptionalField3Input { get; }
```

- *Type:* string

---

##### `OptionalField3ValueInput`<sup>Optional</sup> <a name="OptionalField3ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput"></a>

```csharp
public string OptionalField3ValueInput { get; }
```

- *Type:* string

---

##### `PasswordFieldInput`<sup>Optional</sup> <a name="PasswordFieldInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput"></a>

```csharp
public string PasswordFieldInput { get; }
```

- *Type:* string

---

##### `RevealPasswordInput`<sup>Optional</sup> <a name="RevealPasswordInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput"></a>

```csharp
public object RevealPasswordInput { get; }
```

- *Type:* object

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput"></a>

```csharp
public string SharedPasswordInput { get; }
```

- *Type:* string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput"></a>

```csharp
public string SharedUsernameInput { get; }
```

- *Type:* string

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameFieldInput`<sup>Optional</sup> <a name="UsernameFieldInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput"></a>

```csharp
public string UsernameFieldInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usersInput"></a>

```csharp
public object UsersInput { get; }
```

- *Type:* object

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `CredentialsScheme`<sup>Required</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `OptionalField1`<sup>Required</sup> <a name="OptionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1"></a>

```csharp
public string OptionalField1 { get; }
```

- *Type:* string

---

##### `OptionalField1Value`<sup>Required</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value"></a>

```csharp
public string OptionalField1Value { get; }
```

- *Type:* string

---

##### `OptionalField2`<sup>Required</sup> <a name="OptionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2"></a>

```csharp
public string OptionalField2 { get; }
```

- *Type:* string

---

##### `OptionalField2Value`<sup>Required</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value"></a>

```csharp
public string OptionalField2Value { get; }
```

- *Type:* string

---

##### `OptionalField3`<sup>Required</sup> <a name="OptionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3"></a>

```csharp
public string OptionalField3 { get; }
```

- *Type:* string

---

##### `OptionalField3Value`<sup>Required</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value"></a>

```csharp
public string OptionalField3Value { get; }
```

- *Type:* string

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField"></a>

```csharp
public string PasswordField { get; }
```

- *Type:* string

---

##### `RevealPassword`<sup>Required</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword"></a>

```csharp
public object RevealPassword { get; }
```

- *Type:* object

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; }
```

- *Type:* string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; }
```

- *Type:* string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField"></a>

```csharp
public string UsernameField { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSecurePasswordStoreConfig <a name="AppSecurePasswordStoreConfig" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSecurePasswordStoreConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Label,
    string PasswordField,
    string Url,
    string UsernameField,
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
    string OptionalField1 = null,
    string OptionalField1Value = null,
    string OptionalField2 = null,
    string OptionalField2Value = null,
    string OptionalField3 = null,
    string OptionalField3Value = null,
    object RevealPassword = null,
    string SharedPassword = null,
    string SharedUsername = null,
    object SkipGroups = null,
    object SkipUsers = null,
    string Status = null,
    AppSecurePasswordStoreTimeouts Timeouts = null,
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
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField">PasswordField</a></code> | <code>string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url">Url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField">UsernameField</a></code> | <code>string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#id AppSecurePasswordStore#id}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1">OptionalField1</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value">OptionalField1Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2">OptionalField2</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value">OptionalField2Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3">OptionalField3</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value">OptionalField3Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword">RevealPassword</a></code> | <code>object</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.users">Users</a></code> | <code>object</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#label AppSecurePasswordStore#label}

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField"></a>

```csharp
public string PasswordField { get; set; }
```

- *Type:* string

Login password field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#password_field AppSecurePasswordStore#password_field}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#url AppSecurePasswordStore#url}

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField"></a>

```csharp
public string UsernameField { get; set; }
```

- *Type:* string

Login username field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#username_field AppSecurePasswordStore#username_field}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#accessibility_error_redirect_url AppSecurePasswordStore#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#accessibility_login_redirect_url AppSecurePasswordStore#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#accessibility_self_service AppSecurePasswordStore#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#admin_note AppSecurePasswordStore#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#app_links_json AppSecurePasswordStore#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#auto_submit_toolbar AppSecurePasswordStore#auto_submit_toolbar}

---

##### `CredentialsScheme`<sup>Optional</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; set; }
```

- *Type:* string

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#credentials_scheme AppSecurePasswordStore#credentials_scheme}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#enduser_note AppSecurePasswordStore#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#groups AppSecurePasswordStore#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#hide_ios AppSecurePasswordStore#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#hide_web AppSecurePasswordStore#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#id AppSecurePasswordStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#logo AppSecurePasswordStore#logo}

---

##### `OptionalField1`<sup>Optional</sup> <a name="OptionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1"></a>

```csharp
public string OptionalField1 { get; set; }
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field1 AppSecurePasswordStore#optional_field1}

---

##### `OptionalField1Value`<sup>Optional</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value"></a>

```csharp
public string OptionalField1Value { get; set; }
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field1_value AppSecurePasswordStore#optional_field1_value}

---

##### `OptionalField2`<sup>Optional</sup> <a name="OptionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2"></a>

```csharp
public string OptionalField2 { get; set; }
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field2 AppSecurePasswordStore#optional_field2}

---

##### `OptionalField2Value`<sup>Optional</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value"></a>

```csharp
public string OptionalField2Value { get; set; }
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field2_value AppSecurePasswordStore#optional_field2_value}

---

##### `OptionalField3`<sup>Optional</sup> <a name="OptionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3"></a>

```csharp
public string OptionalField3 { get; set; }
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field3 AppSecurePasswordStore#optional_field3}

---

##### `OptionalField3Value`<sup>Optional</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value"></a>

```csharp
public string OptionalField3Value { get; set; }
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field3_value AppSecurePasswordStore#optional_field3_value}

---

##### `RevealPassword`<sup>Optional</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword"></a>

```csharp
public object RevealPassword { get; set; }
```

- *Type:* object

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#reveal_password AppSecurePasswordStore#reveal_password}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; set; }
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#shared_password AppSecurePasswordStore#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; set; }
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#shared_username AppSecurePasswordStore#shared_username}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#skip_groups AppSecurePasswordStore#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#skip_users AppSecurePasswordStore#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#status AppSecurePasswordStore#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts"></a>

```csharp
public AppSecurePasswordStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#timeouts AppSecurePasswordStore#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template AppSecurePasswordStore#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template_push_status AppSecurePasswordStore#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template_suffix AppSecurePasswordStore#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template_type AppSecurePasswordStore#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.users"></a>

```csharp
public object Users { get; set; }
```

- *Type:* object

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#users AppSecurePasswordStore#users}

---

### AppSecurePasswordStoreTimeouts <a name="AppSecurePasswordStoreTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSecurePasswordStoreTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#create AppSecurePasswordStore#create}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#read AppSecurePasswordStore#read}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#update AppSecurePasswordStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#create AppSecurePasswordStore#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#read AppSecurePasswordStore#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#update AppSecurePasswordStore#update}.

---

### AppSecurePasswordStoreUsers <a name="AppSecurePasswordStoreUsers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSecurePasswordStoreUsers {
    string Id = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers.property.id">Id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers.property.password">Password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers.property.username">Username</a></code> | <code>string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#id AppSecurePasswordStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#password AppSecurePasswordStore#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#username AppSecurePasswordStore#username}

---

## Classes <a name="Classes" id="Classes"></a>

### AppSecurePasswordStoreTimeoutsOutputReference <a name="AppSecurePasswordStoreTimeoutsOutputReference" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSecurePasswordStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppSecurePasswordStoreUsersList <a name="AppSecurePasswordStoreUsersList" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSecurePasswordStoreUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.get"></a>

```csharp
private AppSecurePasswordStoreUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppSecurePasswordStoreUsersOutputReference <a name="AppSecurePasswordStoreUsersOutputReference" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSecurePasswordStoreUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



