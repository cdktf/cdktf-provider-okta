# `appBasicAuth` Submodule <a name="`appBasicAuth` Submodule" id="@cdktf/provider-okta.appBasicAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppBasicAuth <a name="AppBasicAuth" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth okta_app_basic_auth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

appbasicauth.NewAppBasicAuth(scope Construct, id *string, config AppBasicAuthConfig) AppBasicAuth
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig">AppBasicAuthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig">AppBasicAuthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts"></a>

```go
func PutTimeouts(value AppBasicAuthTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetId"></a>

```go
func ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppBasicAuth resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

appbasicauth.AppBasicAuth_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

appbasicauth.AppBasicAuth_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

appbasicauth.AppBasicAuth_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

appbasicauth.AppBasicAuth_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppBasicAuth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppBasicAuth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppBasicAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppBasicAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference">AppBasicAuthTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrlInput">AuthUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeouts"></a>

```go
func Timeouts() AppBasicAuthTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference">AppBasicAuthTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrlInput"></a>

```go
func AuthUrlInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppBasicAuthConfig <a name="AppBasicAuthConfig" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

&appbasicauth.AppBasicAuthConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthUrl: *string,
	Label: *string,
	Url: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AdminNote: *string,
	AppLinksJson: *string,
	AutoSubmitToolbar: interface{},
	EnduserNote: *string,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	Logo: *string,
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v12.appBasicAuth.AppBasicAuthTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.authUrl">AuthUrl</a></code> | <code>*string</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.url">Url</a></code> | <code>*string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#id AppBasicAuth#id}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.authUrl"></a>

```go
AuthUrl *string
```

- *Type:* *string

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#auth_url AppBasicAuth#auth_url}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#label AppBasicAuth#label}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#url AppBasicAuth#url}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#accessibility_error_redirect_url AppBasicAuth#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#accessibility_login_redirect_url AppBasicAuth#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#accessibility_self_service AppBasicAuth#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#admin_note AppBasicAuth#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#app_links_json AppBasicAuth#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#auto_submit_toolbar AppBasicAuth#auto_submit_toolbar}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#enduser_note AppBasicAuth#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#hide_ios AppBasicAuth#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#hide_web AppBasicAuth#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#id AppBasicAuth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#logo AppBasicAuth#logo}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#status AppBasicAuth#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.timeouts"></a>

```go
Timeouts AppBasicAuthTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#timeouts AppBasicAuth#timeouts}

---

### AppBasicAuthTimeouts <a name="AppBasicAuthTimeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

&appbasicauth.AppBasicAuthTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#create AppBasicAuth#create}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#read AppBasicAuth#read}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#update AppBasicAuth#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#create AppBasicAuth#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#read AppBasicAuth#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_basic_auth#update AppBasicAuth#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppBasicAuthTimeoutsOutputReference <a name="AppBasicAuthTimeoutsOutputReference" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appbasicauth"

appbasicauth.NewAppBasicAuthTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppBasicAuthTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



