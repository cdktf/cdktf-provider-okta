# `appGroupAssignments` Submodule <a name="`appGroupAssignments` Submodule" id="@cdktf/provider-okta.appGroupAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppGroupAssignments <a name="AppGroupAssignments" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments okta_app_group_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.NewAppGroupAssignments(scope Construct, id *string, config AppGroupAssignmentsConfig) AppGroupAssignments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig">AppGroupAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig">AppGroupAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGroup` <a name="PutGroup" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putGroup"></a>

```go
func PutGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putTimeouts"></a>

```go
func PutTimeouts(value AppGroupAssignmentsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a>

---

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppGroupAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.AppGroupAssignments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.AppGroupAssignments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.AppGroupAssignments_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.AppGroupAssignments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppGroupAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppGroupAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppGroupAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppGroupAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.group">Group</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList">AppGroupAssignmentsGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference">AppGroupAssignmentsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.group"></a>

```go
func Group() AppGroupAssignmentsGroupList
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList">AppGroupAssignmentsGroupList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeouts"></a>

```go
func Timeouts() AppGroupAssignmentsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference">AppGroupAssignmentsTimeoutsOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppGroupAssignmentsConfig <a name="AppGroupAssignmentsConfig" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

&appgroupassignments.AppGroupAssignmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Group: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v14.appGroupAssignments.AppGroupAssignmentsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.appId">AppId</a></code> | <code>*string</code> | The ID of the application to assign a group to. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.group">Group</a></code> | <code>interface{}</code> | group block. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#id AppGroupAssignments#id}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The ID of the application to assign a group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#app_id AppGroupAssignments#app_id}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.group"></a>

```go
Group interface{}
```

- *Type:* interface{}

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#group AppGroupAssignments#group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#id AppGroupAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.timeouts"></a>

```go
Timeouts AppGroupAssignmentsTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#timeouts AppGroupAssignments#timeouts}

---

### AppGroupAssignmentsGroup <a name="AppGroupAssignmentsGroup" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

&appgroupassignments.AppGroupAssignmentsGroup {
	Id: *string,
	Priority: *f64,
	Profile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.id">Id</a></code> | <code>*string</code> | A group to associate with the application. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.priority">Priority</a></code> | <code>*f64</code> | Priority of group assignment. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.profile">Profile</a></code> | <code>*string</code> | JSON document containing [application profile](https://developer.okta.com/docs/reference/api/apps/#profile-object). |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.id"></a>

```go
Id *string
```

- *Type:* *string

A group to associate with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#id AppGroupAssignments#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Priority of group assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#priority AppGroupAssignments#priority}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

JSON document containing [application profile](https://developer.okta.com/docs/reference/api/apps/#profile-object).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#profile AppGroupAssignments#profile}

---

### AppGroupAssignmentsTimeouts <a name="AppGroupAssignmentsTimeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

&appgroupassignments.AppGroupAssignmentsTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#create AppGroupAssignments#create}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#read AppGroupAssignments#read}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#update AppGroupAssignments#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#create AppGroupAssignments#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#read AppGroupAssignments#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_group_assignments#update AppGroupAssignments#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppGroupAssignmentsGroupList <a name="AppGroupAssignmentsGroupList" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.NewAppGroupAssignmentsGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppGroupAssignmentsGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.get"></a>

```go
func Get(index *f64) AppGroupAssignmentsGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppGroupAssignmentsGroupOutputReference <a name="AppGroupAssignmentsGroupOutputReference" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.NewAppGroupAssignmentsGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppGroupAssignmentsGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetProfile">ResetProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetProfile"></a>

```go
func ResetProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppGroupAssignmentsTimeoutsOutputReference <a name="AppGroupAssignmentsTimeoutsOutputReference" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/appgroupassignments"

appgroupassignments.NewAppGroupAssignmentsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppGroupAssignmentsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



