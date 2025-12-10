# `appOauthRoleAssignment` Submodule <a name="`appOauthRoleAssignment` Submodule" id="@cdktf/provider-okta.appOauthRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauthRoleAssignment <a name="AppOauthRoleAssignment" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_role_assignment okta_app_oauth_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appoauthroleassignment"

appoauthroleassignment.NewAppOauthRoleAssignment(scope Construct, id *string, config AppOauthRoleAssignmentConfig) AppOauthRoleAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig">AppOauthRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig">AppOauthRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.resetResourceSet">ResetResourceSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetResourceSet` <a name="ResetResourceSet" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.resetResourceSet"></a>

```go
func ResetResourceSet()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.resetRole"></a>

```go
func ResetRole()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppOauthRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appoauthroleassignment"

appoauthroleassignment.AppOauthRoleAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appoauthroleassignment"

appoauthroleassignment.AppOauthRoleAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appoauthroleassignment"

appoauthroleassignment.AppOauthRoleAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appoauthroleassignment"

appoauthroleassignment.AppOauthRoleAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppOauthRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppOauthRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppOauthRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppOauthRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.resourceSetInput">ResourceSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.resourceSet">ResourceSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ResourceSetInput`<sup>Optional</sup> <a name="ResourceSetInput" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.resourceSetInput"></a>

```go
func ResourceSetInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ResourceSet`<sup>Required</sup> <a name="ResourceSet" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.resourceSet"></a>

```go
func ResourceSet() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthRoleAssignmentConfig <a name="AppOauthRoleAssignmentConfig" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appoauthroleassignment"

&appoauthroleassignment.AppOauthRoleAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	Type: *string,
	ResourceSet: *string,
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID for the role to be assigned to. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.type">Type</a></code> | <code>*string</code> | Role type to assign. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.resourceSet">ResourceSet</a></code> | <code>*string</code> | Resource set for the custom role to assign, must be the ID of the created resource set. |
| <code><a href="#@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.role">Role</a></code> | <code>*string</code> | Custom Role ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID for the role to be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_role_assignment#client_id AppOauthRoleAssignment#client_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Role type to assign.

This can be one of the standard Okta roles, such as `HELP_DESK_ADMIN`, or `CUSTOM`. Using custom requires the `resource_set` and `role` attributes to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_role_assignment#type AppOauthRoleAssignment#type}

---

##### `ResourceSet`<sup>Optional</sup> <a name="ResourceSet" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.resourceSet"></a>

```go
ResourceSet *string
```

- *Type:* *string

Resource set for the custom role to assign, must be the ID of the created resource set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_role_assignment#resource_set AppOauthRoleAssignment#resource_set}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-okta.appOauthRoleAssignment.AppOauthRoleAssignmentConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Custom Role ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_role_assignment#role AppOauthRoleAssignment#role}

---



