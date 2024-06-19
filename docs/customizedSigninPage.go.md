# `customizedSigninPage` Submodule <a name="`customizedSigninPage` Submodule" id="@cdktf/provider-okta.customizedSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomizedSigninPage <a name="CustomizedSigninPage" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page okta_customized_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

customizedsigninpage.NewCustomizedSigninPage(scope Construct, id *string, config CustomizedSigninPageConfig) CustomizedSigninPage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig">CustomizedSigninPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig">CustomizedSigninPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting">PutContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations">PutWidgetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting">ResetContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations">ResetWidgetCustomizations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentSecurityPolicySetting` <a name="PutContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting"></a>

```go
func PutContentSecurityPolicySetting(value CustomizedSigninPageContentSecurityPolicySetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---

##### `PutWidgetCustomizations` <a name="PutWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations"></a>

```go
func PutWidgetCustomizations(value CustomizedSigninPageWidgetCustomizations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

---

##### `ResetContentSecurityPolicySetting` <a name="ResetContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting"></a>

```go
func ResetContentSecurityPolicySetting()
```

##### `ResetWidgetCustomizations` <a name="ResetWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations"></a>

```go
func ResetWidgetCustomizations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

customizedsigninpage.CustomizedSigninPage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

customizedsigninpage.CustomizedSigninPage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

customizedsigninpage.CustomizedSigninPage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

customizedsigninpage.CustomizedSigninPage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomizedSigninPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomizedSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CustomizedSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting">ContentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations">WidgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput">BrandIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput">ContentSecurityPolicySettingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput">PageContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput">WidgetCustomizationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput">WidgetVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId">BrandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent">PageContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion">WidgetVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentSecurityPolicySetting`<sup>Required</sup> <a name="ContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting"></a>

```go
func ContentSecurityPolicySetting() CustomizedSigninPageContentSecurityPolicySettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WidgetCustomizations`<sup>Required</sup> <a name="WidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations"></a>

```go
func WidgetCustomizations() CustomizedSigninPageWidgetCustomizationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a>

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput"></a>

```go
func BrandIdInput() *string
```

- *Type:* *string

---

##### `ContentSecurityPolicySettingInput`<sup>Optional</sup> <a name="ContentSecurityPolicySettingInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput"></a>

```go
func ContentSecurityPolicySettingInput() interface{}
```

- *Type:* interface{}

---

##### `PageContentInput`<sup>Optional</sup> <a name="PageContentInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput"></a>

```go
func PageContentInput() *string
```

- *Type:* *string

---

##### `WidgetCustomizationsInput`<sup>Optional</sup> <a name="WidgetCustomizationsInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput"></a>

```go
func WidgetCustomizationsInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetVersionInput`<sup>Optional</sup> <a name="WidgetVersionInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput"></a>

```go
func WidgetVersionInput() *string
```

- *Type:* *string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId"></a>

```go
func BrandId() *string
```

- *Type:* *string

---

##### `PageContent`<sup>Required</sup> <a name="PageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent"></a>

```go
func PageContent() *string
```

- *Type:* *string

---

##### `WidgetVersion`<sup>Required</sup> <a name="WidgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion"></a>

```go
func WidgetVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomizedSigninPageConfig <a name="CustomizedSigninPageConfig" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

&customizedsigninpage.CustomizedSigninPageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BrandId: *string,
	PageContent: *string,
	WidgetVersion: *string,
	ContentSecurityPolicySetting: github.com/cdktf/cdktf-provider-okta-go/okta/v13.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting,
	WidgetCustomizations: github.com/cdktf/cdktf-provider-okta-go/okta/v13.customizedSigninPage.CustomizedSigninPageWidgetCustomizations,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId">BrandId</a></code> | <code>*string</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent">PageContent</a></code> | <code>*string</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion">WidgetVersion</a></code> | <code>*string</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting">ContentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations">WidgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId"></a>

```go
BrandId *string
```

- *Type:* *string

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}

---

##### `PageContent`<sup>Required</sup> <a name="PageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent"></a>

```go
PageContent *string
```

- *Type:* *string

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}

---

##### `WidgetVersion`<sup>Required</sup> <a name="WidgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion"></a>

```go
WidgetVersion *string
```

- *Type:* *string

widget version specified as a Semver.

The following are currently supported
*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}

---

##### `ContentSecurityPolicySetting`<sup>Optional</sup> <a name="ContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting"></a>

```go
ContentSecurityPolicySetting CustomizedSigninPageContentSecurityPolicySetting
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}

---

##### `WidgetCustomizations`<sup>Optional</sup> <a name="WidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations"></a>

```go
WidgetCustomizations CustomizedSigninPageWidgetCustomizations
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#widget_customizations CustomizedSigninPage#widget_customizations}

---

### CustomizedSigninPageContentSecurityPolicySetting <a name="CustomizedSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

&customizedsigninpage.CustomizedSigninPageContentSecurityPolicySetting {
	Mode: *string,
	ReportUri: *string,
	SrcList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode">Mode</a></code> | <code>*string</code> | enforced or report_only. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri">ReportUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList">SrcList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#mode CustomizedSigninPage#mode}

---

##### `ReportUri`<sup>Optional</sup> <a name="ReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri"></a>

```go
ReportUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}.

---

##### `SrcList`<sup>Optional</sup> <a name="SrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList"></a>

```go
SrcList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}.

---

### CustomizedSigninPageWidgetCustomizations <a name="CustomizedSigninPageWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

&customizedsigninpage.CustomizedSigninPageWidgetCustomizations {
	WidgetGeneration: *string,
	AuthenticatorPageCustomLinkLabel: *string,
	AuthenticatorPageCustomLinkUrl: *string,
	ClassicRecoveryFlowEmailOrUsernameLabel: *string,
	CustomLink1Label: *string,
	CustomLink1Url: *string,
	CustomLink2Label: *string,
	CustomLink2Url: *string,
	ForgotPasswordLabel: *string,
	ForgotPasswordUrl: *string,
	HelpLabel: *string,
	HelpUrl: *string,
	PasswordInfoTip: *string,
	PasswordLabel: *string,
	ShowPasswordVisibilityToggle: interface{},
	ShowUserIdentifier: interface{},
	SignInLabel: *string,
	UnlockAccountLabel: *string,
	UnlockAccountUrl: *string,
	UsernameInfoTip: *string,
	UsernameLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration">WidgetGeneration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel">AuthenticatorPageCustomLinkLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl">AuthenticatorPageCustomLinkUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel">ClassicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label">CustomLink1Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url">CustomLink1Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label">CustomLink2Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url">CustomLink2Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel">ForgotPasswordLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl">ForgotPasswordUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel">HelpLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl">HelpUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip">PasswordInfoTip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel">PasswordLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle">ShowPasswordVisibilityToggle</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier">ShowUserIdentifier</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel">SignInLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel">UnlockAccountLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl">UnlockAccountUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip">UsernameInfoTip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel">UsernameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}. |

---

##### `WidgetGeneration`<sup>Required</sup> <a name="WidgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration"></a>

```go
WidgetGeneration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}.

---

##### `AuthenticatorPageCustomLinkLabel`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel"></a>

```go
AuthenticatorPageCustomLinkLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}.

---

##### `AuthenticatorPageCustomLinkUrl`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl"></a>

```go
AuthenticatorPageCustomLinkUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}.

---

##### `ClassicRecoveryFlowEmailOrUsernameLabel`<sup>Optional</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```go
ClassicRecoveryFlowEmailOrUsernameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}.

---

##### `CustomLink1Label`<sup>Optional</sup> <a name="CustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label"></a>

```go
CustomLink1Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}.

---

##### `CustomLink1Url`<sup>Optional</sup> <a name="CustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url"></a>

```go
CustomLink1Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}.

---

##### `CustomLink2Label`<sup>Optional</sup> <a name="CustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label"></a>

```go
CustomLink2Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}.

---

##### `CustomLink2Url`<sup>Optional</sup> <a name="CustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url"></a>

```go
CustomLink2Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}.

---

##### `ForgotPasswordLabel`<sup>Optional</sup> <a name="ForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel"></a>

```go
ForgotPasswordLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}.

---

##### `ForgotPasswordUrl`<sup>Optional</sup> <a name="ForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl"></a>

```go
ForgotPasswordUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}.

---

##### `HelpLabel`<sup>Optional</sup> <a name="HelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel"></a>

```go
HelpLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}.

---

##### `HelpUrl`<sup>Optional</sup> <a name="HelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl"></a>

```go
HelpUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}.

---

##### `PasswordInfoTip`<sup>Optional</sup> <a name="PasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip"></a>

```go
PasswordInfoTip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}.

---

##### `PasswordLabel`<sup>Optional</sup> <a name="PasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel"></a>

```go
PasswordLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}.

---

##### `ShowPasswordVisibilityToggle`<sup>Optional</sup> <a name="ShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle"></a>

```go
ShowPasswordVisibilityToggle interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}.

---

##### `ShowUserIdentifier`<sup>Optional</sup> <a name="ShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier"></a>

```go
ShowUserIdentifier interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}.

---

##### `SignInLabel`<sup>Optional</sup> <a name="SignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel"></a>

```go
SignInLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}.

---

##### `UnlockAccountLabel`<sup>Optional</sup> <a name="UnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel"></a>

```go
UnlockAccountLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}.

---

##### `UnlockAccountUrl`<sup>Optional</sup> <a name="UnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl"></a>

```go
UnlockAccountUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}.

---

##### `UsernameInfoTip`<sup>Optional</sup> <a name="UsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip"></a>

```go
UsernameInfoTip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}.

---

##### `UsernameLabel`<sup>Optional</sup> <a name="UsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel"></a>

```go
UsernameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomizedSigninPageContentSecurityPolicySettingOutputReference <a name="CustomizedSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

customizedsigninpage.NewCustomizedSigninPageContentSecurityPolicySettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomizedSigninPageContentSecurityPolicySettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri">ResetReportUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList">ResetSrcList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetReportUri` <a name="ResetReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri"></a>

```go
func ResetReportUri()
```

##### `ResetSrcList` <a name="ResetSrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList"></a>

```go
func ResetSrcList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput">ReportUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput">SrcListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">ReportUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList">SrcList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ReportUriInput`<sup>Optional</sup> <a name="ReportUriInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput"></a>

```go
func ReportUriInput() *string
```

- *Type:* *string

---

##### `SrcListInput`<sup>Optional</sup> <a name="SrcListInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput"></a>

```go
func SrcListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ReportUri`<sup>Required</sup> <a name="ReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```go
func ReportUri() *string
```

- *Type:* *string

---

##### `SrcList`<sup>Required</sup> <a name="SrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```go
func SrcList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomizedSigninPageWidgetCustomizationsOutputReference <a name="CustomizedSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/customizedsigninpage"

customizedsigninpage.NewCustomizedSigninPageWidgetCustomizationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomizedSigninPageWidgetCustomizationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel">ResetAuthenticatorPageCustomLinkLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl">ResetAuthenticatorPageCustomLinkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel">ResetClassicRecoveryFlowEmailOrUsernameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label">ResetCustomLink1Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url">ResetCustomLink1Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label">ResetCustomLink2Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url">ResetCustomLink2Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel">ResetForgotPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl">ResetForgotPasswordUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel">ResetHelpLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl">ResetHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip">ResetPasswordInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel">ResetPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle">ResetShowPasswordVisibilityToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier">ResetShowUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel">ResetSignInLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel">ResetUnlockAccountLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl">ResetUnlockAccountUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip">ResetUsernameInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel">ResetUsernameLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticatorPageCustomLinkLabel` <a name="ResetAuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel"></a>

```go
func ResetAuthenticatorPageCustomLinkLabel()
```

##### `ResetAuthenticatorPageCustomLinkUrl` <a name="ResetAuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl"></a>

```go
func ResetAuthenticatorPageCustomLinkUrl()
```

##### `ResetClassicRecoveryFlowEmailOrUsernameLabel` <a name="ResetClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel"></a>

```go
func ResetClassicRecoveryFlowEmailOrUsernameLabel()
```

##### `ResetCustomLink1Label` <a name="ResetCustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label"></a>

```go
func ResetCustomLink1Label()
```

##### `ResetCustomLink1Url` <a name="ResetCustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url"></a>

```go
func ResetCustomLink1Url()
```

##### `ResetCustomLink2Label` <a name="ResetCustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label"></a>

```go
func ResetCustomLink2Label()
```

##### `ResetCustomLink2Url` <a name="ResetCustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url"></a>

```go
func ResetCustomLink2Url()
```

##### `ResetForgotPasswordLabel` <a name="ResetForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel"></a>

```go
func ResetForgotPasswordLabel()
```

##### `ResetForgotPasswordUrl` <a name="ResetForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl"></a>

```go
func ResetForgotPasswordUrl()
```

##### `ResetHelpLabel` <a name="ResetHelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel"></a>

```go
func ResetHelpLabel()
```

##### `ResetHelpUrl` <a name="ResetHelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl"></a>

```go
func ResetHelpUrl()
```

##### `ResetPasswordInfoTip` <a name="ResetPasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip"></a>

```go
func ResetPasswordInfoTip()
```

##### `ResetPasswordLabel` <a name="ResetPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel"></a>

```go
func ResetPasswordLabel()
```

##### `ResetShowPasswordVisibilityToggle` <a name="ResetShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle"></a>

```go
func ResetShowPasswordVisibilityToggle()
```

##### `ResetShowUserIdentifier` <a name="ResetShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier"></a>

```go
func ResetShowUserIdentifier()
```

##### `ResetSignInLabel` <a name="ResetSignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel"></a>

```go
func ResetSignInLabel()
```

##### `ResetUnlockAccountLabel` <a name="ResetUnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel"></a>

```go
func ResetUnlockAccountLabel()
```

##### `ResetUnlockAccountUrl` <a name="ResetUnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl"></a>

```go
func ResetUnlockAccountUrl()
```

##### `ResetUsernameInfoTip` <a name="ResetUsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip"></a>

```go
func ResetUsernameInfoTip()
```

##### `ResetUsernameLabel` <a name="ResetUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel"></a>

```go
func ResetUsernameLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput">AuthenticatorPageCustomLinkLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput">AuthenticatorPageCustomLinkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput">ClassicRecoveryFlowEmailOrUsernameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput">CustomLink1LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput">CustomLink1UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput">CustomLink2LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput">CustomLink2UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput">ForgotPasswordLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput">ForgotPasswordUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput">HelpLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput">HelpUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput">PasswordInfoTipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput">PasswordLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput">ShowPasswordVisibilityToggleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput">ShowUserIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput">SignInLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput">UnlockAccountLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput">UnlockAccountUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput">UsernameInfoTipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput">UsernameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput">WidgetGenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">AuthenticatorPageCustomLinkLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">AuthenticatorPageCustomLinkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">ClassicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">CustomLink1Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">CustomLink1Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">CustomLink2Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">CustomLink2Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">ForgotPasswordLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">ForgotPasswordUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel">HelpLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl">HelpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">PasswordInfoTip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">PasswordLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">ShowPasswordVisibilityToggle</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">ShowUserIdentifier</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel">SignInLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">UnlockAccountLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">UnlockAccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">UsernameInfoTip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">UsernameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">WidgetGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticatorPageCustomLinkLabelInput`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput"></a>

```go
func AuthenticatorPageCustomLinkLabelInput() *string
```

- *Type:* *string

---

##### `AuthenticatorPageCustomLinkUrlInput`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput"></a>

```go
func AuthenticatorPageCustomLinkUrlInput() *string
```

- *Type:* *string

---

##### `ClassicRecoveryFlowEmailOrUsernameLabelInput`<sup>Optional</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput"></a>

```go
func ClassicRecoveryFlowEmailOrUsernameLabelInput() *string
```

- *Type:* *string

---

##### `CustomLink1LabelInput`<sup>Optional</sup> <a name="CustomLink1LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput"></a>

```go
func CustomLink1LabelInput() *string
```

- *Type:* *string

---

##### `CustomLink1UrlInput`<sup>Optional</sup> <a name="CustomLink1UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput"></a>

```go
func CustomLink1UrlInput() *string
```

- *Type:* *string

---

##### `CustomLink2LabelInput`<sup>Optional</sup> <a name="CustomLink2LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput"></a>

```go
func CustomLink2LabelInput() *string
```

- *Type:* *string

---

##### `CustomLink2UrlInput`<sup>Optional</sup> <a name="CustomLink2UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput"></a>

```go
func CustomLink2UrlInput() *string
```

- *Type:* *string

---

##### `ForgotPasswordLabelInput`<sup>Optional</sup> <a name="ForgotPasswordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput"></a>

```go
func ForgotPasswordLabelInput() *string
```

- *Type:* *string

---

##### `ForgotPasswordUrlInput`<sup>Optional</sup> <a name="ForgotPasswordUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput"></a>

```go
func ForgotPasswordUrlInput() *string
```

- *Type:* *string

---

##### `HelpLabelInput`<sup>Optional</sup> <a name="HelpLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput"></a>

```go
func HelpLabelInput() *string
```

- *Type:* *string

---

##### `HelpUrlInput`<sup>Optional</sup> <a name="HelpUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput"></a>

```go
func HelpUrlInput() *string
```

- *Type:* *string

---

##### `PasswordInfoTipInput`<sup>Optional</sup> <a name="PasswordInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput"></a>

```go
func PasswordInfoTipInput() *string
```

- *Type:* *string

---

##### `PasswordLabelInput`<sup>Optional</sup> <a name="PasswordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput"></a>

```go
func PasswordLabelInput() *string
```

- *Type:* *string

---

##### `ShowPasswordVisibilityToggleInput`<sup>Optional</sup> <a name="ShowPasswordVisibilityToggleInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput"></a>

```go
func ShowPasswordVisibilityToggleInput() interface{}
```

- *Type:* interface{}

---

##### `ShowUserIdentifierInput`<sup>Optional</sup> <a name="ShowUserIdentifierInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput"></a>

```go
func ShowUserIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `SignInLabelInput`<sup>Optional</sup> <a name="SignInLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput"></a>

```go
func SignInLabelInput() *string
```

- *Type:* *string

---

##### `UnlockAccountLabelInput`<sup>Optional</sup> <a name="UnlockAccountLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput"></a>

```go
func UnlockAccountLabelInput() *string
```

- *Type:* *string

---

##### `UnlockAccountUrlInput`<sup>Optional</sup> <a name="UnlockAccountUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput"></a>

```go
func UnlockAccountUrlInput() *string
```

- *Type:* *string

---

##### `UsernameInfoTipInput`<sup>Optional</sup> <a name="UsernameInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput"></a>

```go
func UsernameInfoTipInput() *string
```

- *Type:* *string

---

##### `UsernameLabelInput`<sup>Optional</sup> <a name="UsernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput"></a>

```go
func UsernameLabelInput() *string
```

- *Type:* *string

---

##### `WidgetGenerationInput`<sup>Optional</sup> <a name="WidgetGenerationInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput"></a>

```go
func WidgetGenerationInput() *string
```

- *Type:* *string

---

##### `AuthenticatorPageCustomLinkLabel`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```go
func AuthenticatorPageCustomLinkLabel() *string
```

- *Type:* *string

---

##### `AuthenticatorPageCustomLinkUrl`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```go
func AuthenticatorPageCustomLinkUrl() *string
```

- *Type:* *string

---

##### `ClassicRecoveryFlowEmailOrUsernameLabel`<sup>Required</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```go
func ClassicRecoveryFlowEmailOrUsernameLabel() *string
```

- *Type:* *string

---

##### `CustomLink1Label`<sup>Required</sup> <a name="CustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```go
func CustomLink1Label() *string
```

- *Type:* *string

---

##### `CustomLink1Url`<sup>Required</sup> <a name="CustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```go
func CustomLink1Url() *string
```

- *Type:* *string

---

##### `CustomLink2Label`<sup>Required</sup> <a name="CustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```go
func CustomLink2Label() *string
```

- *Type:* *string

---

##### `CustomLink2Url`<sup>Required</sup> <a name="CustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```go
func CustomLink2Url() *string
```

- *Type:* *string

---

##### `ForgotPasswordLabel`<sup>Required</sup> <a name="ForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```go
func ForgotPasswordLabel() *string
```

- *Type:* *string

---

##### `ForgotPasswordUrl`<sup>Required</sup> <a name="ForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```go
func ForgotPasswordUrl() *string
```

- *Type:* *string

---

##### `HelpLabel`<sup>Required</sup> <a name="HelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```go
func HelpLabel() *string
```

- *Type:* *string

---

##### `HelpUrl`<sup>Required</sup> <a name="HelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```go
func HelpUrl() *string
```

- *Type:* *string

---

##### `PasswordInfoTip`<sup>Required</sup> <a name="PasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```go
func PasswordInfoTip() *string
```

- *Type:* *string

---

##### `PasswordLabel`<sup>Required</sup> <a name="PasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```go
func PasswordLabel() *string
```

- *Type:* *string

---

##### `ShowPasswordVisibilityToggle`<sup>Required</sup> <a name="ShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```go
func ShowPasswordVisibilityToggle() interface{}
```

- *Type:* interface{}

---

##### `ShowUserIdentifier`<sup>Required</sup> <a name="ShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```go
func ShowUserIdentifier() interface{}
```

- *Type:* interface{}

---

##### `SignInLabel`<sup>Required</sup> <a name="SignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```go
func SignInLabel() *string
```

- *Type:* *string

---

##### `UnlockAccountLabel`<sup>Required</sup> <a name="UnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```go
func UnlockAccountLabel() *string
```

- *Type:* *string

---

##### `UnlockAccountUrl`<sup>Required</sup> <a name="UnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```go
func UnlockAccountUrl() *string
```

- *Type:* *string

---

##### `UsernameInfoTip`<sup>Required</sup> <a name="UsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```go
func UsernameInfoTip() *string
```

- *Type:* *string

---

##### `UsernameLabel`<sup>Required</sup> <a name="UsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```go
func UsernameLabel() *string
```

- *Type:* *string

---

##### `WidgetGeneration`<sup>Required</sup> <a name="WidgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```go
func WidgetGeneration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



