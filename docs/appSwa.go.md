# `okta_app_swa`

Refer to the Terraform Registory for docs: [`okta_app_swa`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa).

# `appSwa` Submodule <a name="`appSwa` Submodule" id="@cdktf/provider-okta.appSwa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSwa <a name="AppSwa" id="@cdktf/provider-okta.appSwa.AppSwa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa okta_app_swa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

appswa.NewAppSwa(scope Construct, id *string, config AppSwaConfig) AppSwa
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig">AppSwaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaConfig">AppSwaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetButtonField">ResetButtonField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetCheckbox">ResetCheckbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetPasswordField">ResetPasswordField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetPreconfiguredApp">ResetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUsernameField">ResetUsernameField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSwa.AppSwa.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSwa.AppSwa.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSwa.AppSwa.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSwa.AppSwa.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSwa.AppSwa.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSwa.AppSwa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSwa.AppSwa.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSwa.AppSwa.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSwa.AppSwa.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appSwa.AppSwa.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSwa.AppSwa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appSwa.AppSwa.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSwa.AppSwa.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSwa.AppSwa.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appSwa.AppSwa.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSwa.AppSwa.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSwa.AppSwa.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appSwa.AppSwa.putTimeouts"></a>

```go
func PutTimeouts(value AppSwaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSwa.AppSwa.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appSwa.AppSwa.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appSwa.AppSwa.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appSwa.AppSwa.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetButtonField` <a name="ResetButtonField" id="@cdktf/provider-okta.appSwa.AppSwa.resetButtonField"></a>

```go
func ResetButtonField()
```

##### `ResetCheckbox` <a name="ResetCheckbox" id="@cdktf/provider-okta.appSwa.AppSwa.resetCheckbox"></a>

```go
func ResetCheckbox()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appSwa.AppSwa.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appSwa.AppSwa.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appSwa.AppSwa.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSwa.AppSwa.resetId"></a>

```go
func ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appSwa.AppSwa.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetPasswordField` <a name="ResetPasswordField" id="@cdktf/provider-okta.appSwa.AppSwa.resetPasswordField"></a>

```go
func ResetPasswordField()
```

##### `ResetPreconfiguredApp` <a name="ResetPreconfiguredApp" id="@cdktf/provider-okta.appSwa.AppSwa.resetPreconfiguredApp"></a>

```go
func ResetPreconfiguredApp()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetRedirectUrl"></a>

```go
func ResetRedirectUrl()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSwa.AppSwa.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appSwa.AppSwa.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-okta.appSwa.AppSwa.resetUrlRegex"></a>

```go
func ResetUrlRegex()
```

##### `ResetUsernameField` <a name="ResetUsernameField" id="@cdktf/provider-okta.appSwa.AppSwa.resetUsernameField"></a>

```go
func ResetUsernameField()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppSwa resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appSwa.AppSwa.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

appswa.AppSwa_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSwa.AppSwa.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

appswa.AppSwa_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

appswa.AppSwa_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

appswa.AppSwa_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppSwa resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppSwa to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppSwa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppSwa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference">AppSwaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.buttonFieldInput">ButtonFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.checkboxInput">CheckboxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.passwordFieldInput">PasswordFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredAppInput">PreconfiguredAppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.urlRegexInput">UrlRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.usernameFieldInput">UsernameFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.buttonField">ButtonField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.checkbox">Checkbox</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.passwordField">PasswordField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.usernameField">UsernameField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSwa.AppSwa.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSwa.AppSwa.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSwa.AppSwa.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSwa.AppSwa.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSwa.AppSwa.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSwa.AppSwa.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSwa.AppSwa.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSwa.AppSwa.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSwa.AppSwa.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSwa.AppSwa.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSwa.AppSwa.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSwa.AppSwa.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSwa.AppSwa.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSwa.AppSwa.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSwa.AppSwa.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appSwa.AppSwa.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSwa.AppSwa.property.timeouts"></a>

```go
func Timeouts() AppSwaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference">AppSwaTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `ButtonFieldInput`<sup>Optional</sup> <a name="ButtonFieldInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.buttonFieldInput"></a>

```go
func ButtonFieldInput() *string
```

- *Type:* *string

---

##### `CheckboxInput`<sup>Optional</sup> <a name="CheckboxInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.checkboxInput"></a>

```go
func CheckboxInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `PasswordFieldInput`<sup>Optional</sup> <a name="PasswordFieldInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.passwordFieldInput"></a>

```go
func PasswordFieldInput() *string
```

- *Type:* *string

---

##### `PreconfiguredAppInput`<sup>Optional</sup> <a name="PreconfiguredAppInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredAppInput"></a>

```go
func PreconfiguredAppInput() *string
```

- *Type:* *string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrlInput"></a>

```go
func RedirectUrlInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.urlRegexInput"></a>

```go
func UrlRegexInput() *string
```

- *Type:* *string

---

##### `UsernameFieldInput`<sup>Optional</sup> <a name="UsernameFieldInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.usernameFieldInput"></a>

```go
func UsernameFieldInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSwa.AppSwa.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `ButtonField`<sup>Required</sup> <a name="ButtonField" id="@cdktf/provider-okta.appSwa.AppSwa.property.buttonField"></a>

```go
func ButtonField() *string
```

- *Type:* *string

---

##### `Checkbox`<sup>Required</sup> <a name="Checkbox" id="@cdktf/provider-okta.appSwa.AppSwa.property.checkbox"></a>

```go
func Checkbox() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSwa.AppSwa.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSwa.AppSwa.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSwa.AppSwa.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appSwa.AppSwa.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSwa.AppSwa.property.passwordField"></a>

```go
func PasswordField() *string
```

- *Type:* *string

---

##### `PreconfiguredApp`<sup>Required</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredApp"></a>

```go
func PreconfiguredApp() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSwa.AppSwa.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appSwa.AppSwa.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-okta.appSwa.AppSwa.property.urlRegex"></a>

```go
func UrlRegex() *string
```

- *Type:* *string

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSwa.AppSwa.property.usernameField"></a>

```go
func UsernameField() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSwa.AppSwa.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSwaConfig <a name="AppSwaConfig" id="@cdktf/provider-okta.appSwa.AppSwaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSwa.AppSwaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

&appswa.AppSwaConfig {
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
	AutoSubmitToolbar: interface{},
	ButtonField: *string,
	Checkbox: *string,
	EnduserNote: *string,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	Logo: *string,
	PasswordField: *string,
	PreconfiguredApp: *string,
	RedirectUrl: *string,
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta.appSwa.AppSwaTimeouts,
	Url: *string,
	UrlRegex: *string,
	UsernameField: *string,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.buttonField">ButtonField</a></code> | <code>*string</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.checkbox">Checkbox</a></code> | <code>*string</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#id AppSwa#id}. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.passwordField">PasswordField</a></code> | <code>*string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | If going to the login page URL redirects to another page, then enter that URL here. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.url">Url</a></code> | <code>*string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.usernameField">UsernameField</a></code> | <code>*string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#label AppSwa#label}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_error_redirect_url AppSwa#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_login_redirect_url AppSwa#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_self_service AppSwa#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#admin_note AppSwa#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#app_links_json AppSwa#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#auto_submit_toolbar AppSwa#auto_submit_toolbar}

---

##### `ButtonField`<sup>Optional</sup> <a name="ButtonField" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.buttonField"></a>

```go
ButtonField *string
```

- *Type:* *string

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#button_field AppSwa#button_field}

---

##### `Checkbox`<sup>Optional</sup> <a name="Checkbox" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.checkbox"></a>

```go
Checkbox *string
```

- *Type:* *string

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#checkbox AppSwa#checkbox}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#enduser_note AppSwa#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#hide_ios AppSwa#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#hide_web AppSwa#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#id AppSwa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#logo AppSwa#logo}

---

##### `PasswordField`<sup>Optional</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.passwordField"></a>

```go
PasswordField *string
```

- *Type:* *string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#password_field AppSwa#password_field}

---

##### `PreconfiguredApp`<sup>Optional</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.preconfiguredApp"></a>

```go
PreconfiguredApp *string
```

- *Type:* *string

Preconfigured app name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#preconfigured_app AppSwa#preconfigured_app}

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.redirectUrl"></a>

```go
RedirectUrl *string
```

- *Type:* *string

If going to the login page URL redirects to another page, then enter that URL here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#redirect_url AppSwa#redirect_url}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#status AppSwa#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.timeouts"></a>

```go
Timeouts AppSwaTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#timeouts AppSwa#timeouts}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#url AppSwa#url}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.urlRegex"></a>

```go
UrlRegex *string
```

- *Type:* *string

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#url_regex AppSwa#url_regex}

---

##### `UsernameField`<sup>Optional</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.usernameField"></a>

```go
UsernameField *string
```

- *Type:* *string

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#username_field AppSwa#username_field}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template AppSwa#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_push_status AppSwa#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_suffix AppSwa#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_type AppSwa#user_name_template_type}

---

### AppSwaTimeouts <a name="AppSwaTimeouts" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

&appswa.AppSwaTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#create AppSwa#create}. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#read AppSwa#read}. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#update AppSwa#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#create AppSwa#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#read AppSwa#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#update AppSwa#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSwaTimeoutsOutputReference <a name="AppSwaTimeoutsOutputReference" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appswa"

appswa.NewAppSwaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppSwaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



