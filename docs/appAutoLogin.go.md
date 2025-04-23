# `appAutoLogin` Submodule <a name="`appAutoLogin` Submodule" id="@cdktf/provider-okta.appAutoLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppAutoLogin <a name="AppAutoLogin" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login okta_app_auto_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

appautologin.NewAppAutoLogin(scope Construct, id *string, config AppAutoLoginConfig) AppAutoLogin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig">AppAutoLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig">AppAutoLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetCredentialsScheme">ResetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetPreconfiguredApp">ResetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetRevealPassword">ResetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnRedirectUrl">ResetSignOnRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnUrl">ResetSignOnUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts"></a>

```go
func PutTimeouts(value AppAutoLoginTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppSettingsJson"></a>

```go
func ResetAppSettingsJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetCredentialsScheme` <a name="ResetCredentialsScheme" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetCredentialsScheme"></a>

```go
func ResetCredentialsScheme()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetId"></a>

```go
func ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetPreconfiguredApp` <a name="ResetPreconfiguredApp" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetPreconfiguredApp"></a>

```go
func ResetPreconfiguredApp()
```

##### `ResetRevealPassword` <a name="ResetRevealPassword" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetRevealPassword"></a>

```go
func ResetRevealPassword()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedPassword"></a>

```go
func ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedUsername"></a>

```go
func ResetSharedUsername()
```

##### `ResetSignOnRedirectUrl` <a name="ResetSignOnRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnRedirectUrl"></a>

```go
func ResetSignOnRedirectUrl()
```

##### `ResetSignOnUrl` <a name="ResetSignOnUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnUrl"></a>

```go
func ResetSignOnUrl()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppAutoLogin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

appautologin.AppAutoLogin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

appautologin.AppAutoLogin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

appautologin.AppAutoLogin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

appautologin.AppAutoLogin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppAutoLogin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppAutoLogin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppAutoLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppAutoLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference">AppAutoLoginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsSchemeInput">CredentialsSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredAppInput">PreconfiguredAppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPasswordInput">RevealPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrlInput">SignOnRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrlInput">SignOnUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsScheme">CredentialsScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPassword">RevealPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPassword">SharedPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsername">SharedUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrl">SignOnRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrl">SignOnUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeouts"></a>

```go
func Timeouts() AppAutoLoginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference">AppAutoLoginTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJsonInput"></a>

```go
func AppSettingsJsonInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `CredentialsSchemeInput`<sup>Optional</sup> <a name="CredentialsSchemeInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsSchemeInput"></a>

```go
func CredentialsSchemeInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `PreconfiguredAppInput`<sup>Optional</sup> <a name="PreconfiguredAppInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredAppInput"></a>

```go
func PreconfiguredAppInput() *string
```

- *Type:* *string

---

##### `RevealPasswordInput`<sup>Optional</sup> <a name="RevealPasswordInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPasswordInput"></a>

```go
func RevealPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPasswordInput"></a>

```go
func SharedPasswordInput() *string
```

- *Type:* *string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsernameInput"></a>

```go
func SharedUsernameInput() *string
```

- *Type:* *string

---

##### `SignOnRedirectUrlInput`<sup>Optional</sup> <a name="SignOnRedirectUrlInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrlInput"></a>

```go
func SignOnRedirectUrlInput() *string
```

- *Type:* *string

---

##### `SignOnUrlInput`<sup>Optional</sup> <a name="SignOnUrlInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrlInput"></a>

```go
func SignOnUrlInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJson"></a>

```go
func AppSettingsJson() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `CredentialsScheme`<sup>Required</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsScheme"></a>

```go
func CredentialsScheme() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `PreconfiguredApp`<sup>Required</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredApp"></a>

```go
func PreconfiguredApp() *string
```

- *Type:* *string

---

##### `RevealPassword`<sup>Required</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPassword"></a>

```go
func RevealPassword() interface{}
```

- *Type:* interface{}

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPassword"></a>

```go
func SharedPassword() *string
```

- *Type:* *string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsername"></a>

```go
func SharedUsername() *string
```

- *Type:* *string

---

##### `SignOnRedirectUrl`<sup>Required</sup> <a name="SignOnRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrl"></a>

```go
func SignOnRedirectUrl() *string
```

- *Type:* *string

---

##### `SignOnUrl`<sup>Required</sup> <a name="SignOnUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrl"></a>

```go
func SignOnUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppAutoLoginConfig <a name="AppAutoLoginConfig" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

&appautologin.AppAutoLoginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Label: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AdminNote: *string,
	AppLinksJson: *string,
	AppSettingsJson: *string,
	AutoSubmitToolbar: interface{},
	CredentialsScheme: *string,
	EnduserNote: *string,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	Logo: *string,
	PreconfiguredApp: *string,
	RevealPassword: interface{},
	SharedPassword: *string,
	SharedUsername: *string,
	SignOnRedirectUrl: *string,
	SignOnUrl: *string,
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v13.appAutoLogin.AppAutoLoginTimeouts,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.label">Label</a></code> | <code>*string</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.credentialsScheme">CredentialsScheme</a></code> | <code>*string</code> | Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#id AppAutoLogin#id}. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.logo">Logo</a></code> | <code>*string</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | Tells Okta to use an existing application in their application catalog, as opposed to a custom application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.revealPassword">RevealPassword</a></code> | <code>interface{}</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedPassword">SharedPassword</a></code> | <code>*string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedUsername">SharedUsername</a></code> | <code>*string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnRedirectUrl">SignOnRedirectUrl</a></code> | <code>*string</code> | Post login redirect URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnUrl">SignOnUrl</a></code> | <code>*string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. Default: `BUILT_IN`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#label AppAutoLogin#label}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#accessibility_error_redirect_url AppAutoLogin#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#accessibility_login_redirect_url AppAutoLogin#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#accessibility_self_service AppAutoLogin#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#admin_note AppAutoLogin#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#app_links_json AppAutoLogin#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appSettingsJson"></a>

```go
AppSettingsJson *string
```

- *Type:* *string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#app_settings_json AppAutoLogin#app_settings_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#auto_submit_toolbar AppAutoLogin#auto_submit_toolbar}

---

##### `CredentialsScheme`<sup>Optional</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.credentialsScheme"></a>

```go
CredentialsScheme *string
```

- *Type:* *string

Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#credentials_scheme AppAutoLogin#credentials_scheme}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#enduser_note AppAutoLogin#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#hide_ios AppAutoLogin#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#hide_web AppAutoLogin#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#id AppAutoLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#logo AppAutoLogin#logo}

---

##### `PreconfiguredApp`<sup>Optional</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.preconfiguredApp"></a>

```go
PreconfiguredApp *string
```

- *Type:* *string

Tells Okta to use an existing application in their application catalog, as opposed to a custom application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#preconfigured_app AppAutoLogin#preconfigured_app}

---

##### `RevealPassword`<sup>Optional</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.revealPassword"></a>

```go
RevealPassword interface{}
```

- *Type:* interface{}

Allow user to reveal password.

Default is false. It can not be set to true if credentials_scheme is "ADMIN_SETS_CREDENTIALS", "SHARED_USERNAME_AND_PASSWORD" or "EXTERNAL_PASSWORD_SYNC".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#reveal_password AppAutoLogin#reveal_password}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedPassword"></a>

```go
SharedPassword *string
```

- *Type:* *string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#shared_password AppAutoLogin#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedUsername"></a>

```go
SharedUsername *string
```

- *Type:* *string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#shared_username AppAutoLogin#shared_username}

---

##### `SignOnRedirectUrl`<sup>Optional</sup> <a name="SignOnRedirectUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnRedirectUrl"></a>

```go
SignOnRedirectUrl *string
```

- *Type:* *string

Post login redirect URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#sign_on_redirect_url AppAutoLogin#sign_on_redirect_url}

---

##### `SignOnUrl`<sup>Optional</sup> <a name="SignOnUrl" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnUrl"></a>

```go
SignOnUrl *string
```

- *Type:* *string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#sign_on_url AppAutoLogin#sign_on_url}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#status AppAutoLogin#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.timeouts"></a>

```go
Timeouts AppAutoLoginTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#timeouts AppAutoLogin#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#user_name_template AppAutoLogin#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#user_name_template_push_status AppAutoLogin#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#user_name_template_suffix AppAutoLogin#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#user_name_template_type AppAutoLogin#user_name_template_type}

---

### AppAutoLoginTimeouts <a name="AppAutoLoginTimeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

&appautologin.AppAutoLoginTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#create AppAutoLogin#create}. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#read AppAutoLogin#read}. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#update AppAutoLogin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#create AppAutoLogin#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#read AppAutoLogin#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/app_auto_login#update AppAutoLogin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppAutoLoginTimeoutsOutputReference <a name="AppAutoLoginTimeoutsOutputReference" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appautologin"

appautologin.NewAppAutoLoginTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppAutoLoginTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



