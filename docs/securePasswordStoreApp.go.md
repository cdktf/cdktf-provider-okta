# `securePasswordStoreApp` Submodule <a name="`securePasswordStoreApp` Submodule" id="@cdktf/provider-okta.securePasswordStoreApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurePasswordStoreApp <a name="SecurePasswordStoreApp" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app okta_secure_password_store_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

securepasswordstoreapp.NewSecurePasswordStoreApp(scope Construct, id *string, config SecurePasswordStoreAppConfig) SecurePasswordStoreApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig">SecurePasswordStoreAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig">SecurePasswordStoreAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme">ResetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1">ResetOptionalField1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value">ResetOptionalField1Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2">ResetOptionalField2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value">ResetOptionalField2Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3">ResetOptionalField3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value">ResetOptionalField3Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword">ResetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts"></a>

```go
func PutTimeouts(value SecurePasswordStoreAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers"></a>

```go
func PutUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetCredentialsScheme` <a name="ResetCredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme"></a>

```go
func ResetCredentialsScheme()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups"></a>

```go
func ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId"></a>

```go
func ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetOptionalField1` <a name="ResetOptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1"></a>

```go
func ResetOptionalField1()
```

##### `ResetOptionalField1Value` <a name="ResetOptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value"></a>

```go
func ResetOptionalField1Value()
```

##### `ResetOptionalField2` <a name="ResetOptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2"></a>

```go
func ResetOptionalField2()
```

##### `ResetOptionalField2Value` <a name="ResetOptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value"></a>

```go
func ResetOptionalField2Value()
```

##### `ResetOptionalField3` <a name="ResetOptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3"></a>

```go
func ResetOptionalField3()
```

##### `ResetOptionalField3Value` <a name="ResetOptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value"></a>

```go
func ResetOptionalField3Value()
```

##### `ResetRevealPassword` <a name="ResetRevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword"></a>

```go
func ResetRevealPassword()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword"></a>

```go
func ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername"></a>

```go
func ResetSharedUsername()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups"></a>

```go
func ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers"></a>

```go
func ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers"></a>

```go
func ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

securepasswordstoreapp.SecurePasswordStoreApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

securepasswordstoreapp.SecurePasswordStoreApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

securepasswordstoreapp.SecurePasswordStoreApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput">CredentialsSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput">GroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input">OptionalField1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput">OptionalField1ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input">OptionalField2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput">OptionalField2ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input">OptionalField3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput">OptionalField3ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput">PasswordFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput">RevealPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput">UsernameFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput">UsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme">CredentialsScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1">OptionalField1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value">OptionalField1Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2">OptionalField2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value">OptionalField2Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3">OptionalField3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value">OptionalField3Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField">PasswordField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword">RevealPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword">SharedPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername">SharedUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField">UsernameField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts"></a>

```go
func Timeouts() SecurePasswordStoreAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users"></a>

```go
func Users() SecurePasswordStoreAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `CredentialsSchemeInput`<sup>Optional</sup> <a name="CredentialsSchemeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput"></a>

```go
func CredentialsSchemeInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput"></a>

```go
func GroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `OptionalField1Input`<sup>Optional</sup> <a name="OptionalField1Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input"></a>

```go
func OptionalField1Input() *string
```

- *Type:* *string

---

##### `OptionalField1ValueInput`<sup>Optional</sup> <a name="OptionalField1ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput"></a>

```go
func OptionalField1ValueInput() *string
```

- *Type:* *string

---

##### `OptionalField2Input`<sup>Optional</sup> <a name="OptionalField2Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input"></a>

```go
func OptionalField2Input() *string
```

- *Type:* *string

---

##### `OptionalField2ValueInput`<sup>Optional</sup> <a name="OptionalField2ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput"></a>

```go
func OptionalField2ValueInput() *string
```

- *Type:* *string

---

##### `OptionalField3Input`<sup>Optional</sup> <a name="OptionalField3Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input"></a>

```go
func OptionalField3Input() *string
```

- *Type:* *string

---

##### `OptionalField3ValueInput`<sup>Optional</sup> <a name="OptionalField3ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput"></a>

```go
func OptionalField3ValueInput() *string
```

- *Type:* *string

---

##### `PasswordFieldInput`<sup>Optional</sup> <a name="PasswordFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput"></a>

```go
func PasswordFieldInput() *string
```

- *Type:* *string

---

##### `RevealPasswordInput`<sup>Optional</sup> <a name="RevealPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput"></a>

```go
func RevealPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput"></a>

```go
func SharedPasswordInput() *string
```

- *Type:* *string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput"></a>

```go
func SharedUsernameInput() *string
```

- *Type:* *string

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput"></a>

```go
func SkipGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput"></a>

```go
func SkipUsersInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameFieldInput`<sup>Optional</sup> <a name="UsernameFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput"></a>

```go
func UsernameFieldInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput"></a>

```go
func UsersInput() interface{}
```

- *Type:* interface{}

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `CredentialsScheme`<sup>Required</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme"></a>

```go
func CredentialsScheme() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `OptionalField1`<sup>Required</sup> <a name="OptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1"></a>

```go
func OptionalField1() *string
```

- *Type:* *string

---

##### `OptionalField1Value`<sup>Required</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value"></a>

```go
func OptionalField1Value() *string
```

- *Type:* *string

---

##### `OptionalField2`<sup>Required</sup> <a name="OptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2"></a>

```go
func OptionalField2() *string
```

- *Type:* *string

---

##### `OptionalField2Value`<sup>Required</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value"></a>

```go
func OptionalField2Value() *string
```

- *Type:* *string

---

##### `OptionalField3`<sup>Required</sup> <a name="OptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3"></a>

```go
func OptionalField3() *string
```

- *Type:* *string

---

##### `OptionalField3Value`<sup>Required</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value"></a>

```go
func OptionalField3Value() *string
```

- *Type:* *string

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField"></a>

```go
func PasswordField() *string
```

- *Type:* *string

---

##### `RevealPassword`<sup>Required</sup> <a name="RevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword"></a>

```go
func RevealPassword() interface{}
```

- *Type:* interface{}

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword"></a>

```go
func SharedPassword() *string
```

- *Type:* *string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername"></a>

```go
func SharedUsername() *string
```

- *Type:* *string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups"></a>

```go
func SkipGroups() interface{}
```

- *Type:* interface{}

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers"></a>

```go
func SkipUsers() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField"></a>

```go
func UsernameField() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurePasswordStoreAppConfig <a name="SecurePasswordStoreAppConfig" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

&securepasswordstoreapp.SecurePasswordStoreAppConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Label: *string,
	PasswordField: *string,
	Url: *string,
	UsernameField: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AdminNote: *string,
	AppLinksJson: *string,
	AutoSubmitToolbar: interface{},
	CredentialsScheme: *string,
	EnduserNote: *string,
	Groups: *[]*string,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	Logo: *string,
	OptionalField1: *string,
	OptionalField1Value: *string,
	OptionalField2: *string,
	OptionalField2Value: *string,
	OptionalField3: *string,
	OptionalField3Value: *string,
	RevealPassword: interface{},
	SharedPassword: *string,
	SharedUsername: *string,
	SkipGroups: interface{},
	SkipUsers: interface{},
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v6.securePasswordStoreApp.SecurePasswordStoreAppTimeouts,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
	Users: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField">PasswordField</a></code> | <code>*string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url">Url</a></code> | <code>*string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField">UsernameField</a></code> | <code>*string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme">CredentialsScheme</a></code> | <code>*string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups">Groups</a></code> | <code>*[]*string</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1">OptionalField1</a></code> | <code>*string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value">OptionalField1Value</a></code> | <code>*string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2">OptionalField2</a></code> | <code>*string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value">OptionalField2Value</a></code> | <code>*string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3">OptionalField3</a></code> | <code>*string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value">OptionalField3Value</a></code> | <code>*string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword">RevealPassword</a></code> | <code>interface{}</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword">SharedPassword</a></code> | <code>*string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername">SharedUsername</a></code> | <code>*string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users">Users</a></code> | <code>interface{}</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#label SecurePasswordStoreApp#label}

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField"></a>

```go
PasswordField *string
```

- *Type:* *string

Login password field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#password_field SecurePasswordStoreApp#password_field}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#url SecurePasswordStoreApp#url}

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField"></a>

```go
UsernameField *string
```

- *Type:* *string

Login username field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#username_field SecurePasswordStoreApp#username_field}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_error_redirect_url SecurePasswordStoreApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_login_redirect_url SecurePasswordStoreApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_self_service SecurePasswordStoreApp#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#admin_note SecurePasswordStoreApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#app_links_json SecurePasswordStoreApp#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#auto_submit_toolbar SecurePasswordStoreApp#auto_submit_toolbar}

---

##### `CredentialsScheme`<sup>Optional</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme"></a>

```go
CredentialsScheme *string
```

- *Type:* *string

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#credentials_scheme SecurePasswordStoreApp#credentials_scheme}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#enduser_note SecurePasswordStoreApp#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups"></a>

```go
Groups *[]*string
```

- *Type:* *[]*string

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#groups SecurePasswordStoreApp#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#hide_ios SecurePasswordStoreApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#hide_web SecurePasswordStoreApp#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#logo SecurePasswordStoreApp#logo}

---

##### `OptionalField1`<sup>Optional</sup> <a name="OptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1"></a>

```go
OptionalField1 *string
```

- *Type:* *string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field1 SecurePasswordStoreApp#optional_field1}

---

##### `OptionalField1Value`<sup>Optional</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value"></a>

```go
OptionalField1Value *string
```

- *Type:* *string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field1_value SecurePasswordStoreApp#optional_field1_value}

---

##### `OptionalField2`<sup>Optional</sup> <a name="OptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2"></a>

```go
OptionalField2 *string
```

- *Type:* *string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field2 SecurePasswordStoreApp#optional_field2}

---

##### `OptionalField2Value`<sup>Optional</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value"></a>

```go
OptionalField2Value *string
```

- *Type:* *string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field2_value SecurePasswordStoreApp#optional_field2_value}

---

##### `OptionalField3`<sup>Optional</sup> <a name="OptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3"></a>

```go
OptionalField3 *string
```

- *Type:* *string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field3 SecurePasswordStoreApp#optional_field3}

---

##### `OptionalField3Value`<sup>Optional</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value"></a>

```go
OptionalField3Value *string
```

- *Type:* *string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field3_value SecurePasswordStoreApp#optional_field3_value}

---

##### `RevealPassword`<sup>Optional</sup> <a name="RevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword"></a>

```go
RevealPassword interface{}
```

- *Type:* interface{}

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#reveal_password SecurePasswordStoreApp#reveal_password}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword"></a>

```go
SharedPassword *string
```

- *Type:* *string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#shared_password SecurePasswordStoreApp#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername"></a>

```go
SharedUsername *string
```

- *Type:* *string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#shared_username SecurePasswordStoreApp#shared_username}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups"></a>

```go
SkipGroups interface{}
```

- *Type:* interface{}

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#skip_groups SecurePasswordStoreApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers"></a>

```go
SkipUsers interface{}
```

- *Type:* interface{}

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#skip_users SecurePasswordStoreApp#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#status SecurePasswordStoreApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts"></a>

```go
Timeouts SecurePasswordStoreAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#timeouts SecurePasswordStoreApp#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template SecurePasswordStoreApp#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_push_status SecurePasswordStoreApp#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_suffix SecurePasswordStoreApp#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_type SecurePasswordStoreApp#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users"></a>

```go
Users interface{}
```

- *Type:* interface{}

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#users SecurePasswordStoreApp#users}

---

### SecurePasswordStoreAppTimeouts <a name="SecurePasswordStoreAppTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

&securepasswordstoreapp.SecurePasswordStoreAppTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#create SecurePasswordStoreApp#create}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#read SecurePasswordStoreApp#read}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#update SecurePasswordStoreApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#create SecurePasswordStoreApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#read SecurePasswordStoreApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#update SecurePasswordStoreApp#update}.

---

### SecurePasswordStoreAppUsers <a name="SecurePasswordStoreAppUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

&securepasswordstoreapp.SecurePasswordStoreAppUsers {
	Id: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id">Id</a></code> | <code>*string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password">Password</a></code> | <code>*string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username">Username</a></code> | <code>*string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id"></a>

```go
Id *string
```

- *Type:* *string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#password SecurePasswordStoreApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#username SecurePasswordStoreApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurePasswordStoreAppTimeoutsOutputReference <a name="SecurePasswordStoreAppTimeoutsOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

securepasswordstoreapp.NewSecurePasswordStoreAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurePasswordStoreAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurePasswordStoreAppUsersList <a name="SecurePasswordStoreAppUsersList" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

securepasswordstoreapp.NewSecurePasswordStoreAppUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurePasswordStoreAppUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get"></a>

```go
func Get(index *f64) SecurePasswordStoreAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurePasswordStoreAppUsersOutputReference <a name="SecurePasswordStoreAppUsersOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/securepasswordstoreapp"

securepasswordstoreapp.NewSecurePasswordStoreAppUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurePasswordStoreAppUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



