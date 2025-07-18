# `groupRole` Submodule <a name="`groupRole` Submodule" id="@cdktf/provider-okta.groupRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupRole <a name="GroupRole" id="@cdktf/provider-okta.groupRole.GroupRole"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role okta_group_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/grouprole"

grouprole.NewGroupRole(scope Construct, id *string, config GroupRoleConfig) GroupRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig">GroupRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig">GroupRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetDisableNotifications">ResetDisableNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetResourceSetId">ResetResourceSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetRoleId">ResetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetTargetAppList">ResetTargetAppList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetTargetGroupList">ResetTargetGroupList</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupRole.GroupRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.groupRole.GroupRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.groupRole.GroupRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupRole.GroupRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.groupRole.GroupRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.groupRole.GroupRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.groupRole.GroupRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.groupRole.GroupRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.groupRole.GroupRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.groupRole.GroupRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.groupRole.GroupRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.groupRole.GroupRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.groupRole.GroupRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.groupRole.GroupRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRole.GroupRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupRole.GroupRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.groupRole.GroupRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRole.GroupRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.groupRole.GroupRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.groupRole.GroupRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.groupRole.GroupRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.groupRole.GroupRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRole.GroupRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisableNotifications` <a name="ResetDisableNotifications" id="@cdktf/provider-okta.groupRole.GroupRole.resetDisableNotifications"></a>

```go
func ResetDisableNotifications()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.groupRole.GroupRole.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceSetId` <a name="ResetResourceSetId" id="@cdktf/provider-okta.groupRole.GroupRole.resetResourceSetId"></a>

```go
func ResetResourceSetId()
```

##### `ResetRoleId` <a name="ResetRoleId" id="@cdktf/provider-okta.groupRole.GroupRole.resetRoleId"></a>

```go
func ResetRoleId()
```

##### `ResetTargetAppList` <a name="ResetTargetAppList" id="@cdktf/provider-okta.groupRole.GroupRole.resetTargetAppList"></a>

```go
func ResetTargetAppList()
```

##### `ResetTargetGroupList` <a name="ResetTargetGroupList" id="@cdktf/provider-okta.groupRole.GroupRole.resetTargetGroupList"></a>

```go
func ResetTargetGroupList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.groupRole.GroupRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/grouprole"

grouprole.GroupRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupRole.GroupRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/grouprole"

grouprole.GroupRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/grouprole"

grouprole.GroupRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/grouprole"

grouprole.GroupRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GroupRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroupRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroupRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GroupRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.disableNotificationsInput">DisableNotificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetIdInput">ResourceSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleTypeInput">RoleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetAppListInput">TargetAppListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupListInput">TargetGroupListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.disableNotifications">DisableNotifications</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetId">ResourceSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleType">RoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetAppList">TargetAppList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupList">TargetGroupList</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.groupRole.GroupRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.groupRole.GroupRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupRole.GroupRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.groupRole.GroupRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.groupRole.GroupRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.groupRole.GroupRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.groupRole.GroupRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupRole.GroupRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupRole.GroupRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupRole.GroupRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupRole.GroupRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupRole.GroupRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRole.GroupRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupRole.GroupRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisableNotificationsInput`<sup>Optional</sup> <a name="DisableNotificationsInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.disableNotificationsInput"></a>

```go
func DisableNotificationsInput() interface{}
```

- *Type:* interface{}

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceSetIdInput`<sup>Optional</sup> <a name="ResourceSetIdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetIdInput"></a>

```go
func ResourceSetIdInput() *string
```

- *Type:* *string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleTypeInput"></a>

```go
func RoleTypeInput() *string
```

- *Type:* *string

---

##### `TargetAppListInput`<sup>Optional</sup> <a name="TargetAppListInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetAppListInput"></a>

```go
func TargetAppListInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetGroupListInput`<sup>Optional</sup> <a name="TargetGroupListInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupListInput"></a>

```go
func TargetGroupListInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisableNotifications`<sup>Required</sup> <a name="DisableNotifications" id="@cdktf/provider-okta.groupRole.GroupRole.property.disableNotifications"></a>

```go
func DisableNotifications() interface{}
```

- *Type:* interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-okta.groupRole.GroupRole.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceSetId`<sup>Required</sup> <a name="ResourceSetId" id="@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetId"></a>

```go
func ResourceSetId() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleType"></a>

```go
func RoleType() *string
```

- *Type:* *string

---

##### `TargetAppList`<sup>Required</sup> <a name="TargetAppList" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetAppList"></a>

```go
func TargetAppList() *[]*string
```

- *Type:* *[]*string

---

##### `TargetGroupList`<sup>Required</sup> <a name="TargetGroupList" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupList"></a>

```go
func TargetGroupList() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.groupRole.GroupRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupRoleConfig <a name="GroupRoleConfig" id="@cdktf/provider-okta.groupRole.GroupRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/grouprole"

&grouprole.GroupRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	RoleType: *string,
	DisableNotifications: interface{},
	Id: *string,
	ResourceSetId: *string,
	RoleId: *string,
	TargetAppList: *[]*string,
	TargetGroupList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.groupId">GroupId</a></code> | <code>*string</code> | ID of group to attach admin roles to. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleType">RoleType</a></code> | <code>*string</code> | Admin role assigned to the group. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.disableNotifications">DisableNotifications</a></code> | <code>interface{}</code> | When this setting is enabled, the admins won't receive any of the default Okta administrator emails. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#id GroupRole#id}. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.resourceSetId">ResourceSetId</a></code> | <code>*string</code> | Resource Set ID. Required for role_type = `CUSTOM`. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleId">RoleId</a></code> | <code>*string</code> | Role ID. Required for role_type = `CUSTOM`. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetAppList">TargetAppList</a></code> | <code>*[]*string</code> | A list of app names (name represents set of app instances, like 'salesforce' or 'facebook'), or a combination of app name and app instance ID (like 'facebook.0oapsqQ6dv19pqyEo0g3') you would like as the targets of the admin role. - Only supported when used with the role type `APP_ADMIN`. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetGroupList">TargetGroupList</a></code> | <code>*[]*string</code> | A list of group IDs you would like as the targets of the admin role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

ID of group to attach admin roles to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#group_id GroupRole#group_id}

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleType"></a>

```go
RoleType *string
```

- *Type:* *string

Admin role assigned to the group.

It can be any one of the following values:
"API_ADMIN",
"APP_ADMIN",
"CUSTOM",
"GROUP_MEMBERSHIP_ADMIN",
"HELP_DESK_ADMIN",
"MOBILE_ADMIN",
"ORG_ADMIN",
"READ_ONLY_ADMIN",
"REPORT_ADMIN",
"SUPER_ADMIN",
"USER_ADMIN"
. See [API Docs](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
- "USER_ADMIN" is the Group Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#role_type GroupRole#role_type}

---

##### `DisableNotifications`<sup>Optional</sup> <a name="DisableNotifications" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.disableNotifications"></a>

```go
DisableNotifications interface{}
```

- *Type:* interface{}

When this setting is enabled, the admins won't receive any of the default Okta administrator emails.

These admins also won't have access to contact Okta Support and open support cases on behalf of your org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#disable_notifications GroupRole#disable_notifications}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#id GroupRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceSetId`<sup>Optional</sup> <a name="ResourceSetId" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.resourceSetId"></a>

```go
ResourceSetId *string
```

- *Type:* *string

Resource Set ID. Required for role_type = `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#resource_set_id GroupRole#resource_set_id}

---

##### `RoleId`<sup>Optional</sup> <a name="RoleId" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

Role ID. Required for role_type = `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#role_id GroupRole#role_id}

---

##### `TargetAppList`<sup>Optional</sup> <a name="TargetAppList" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetAppList"></a>

```go
TargetAppList *[]*string
```

- *Type:* *[]*string

A list of app names (name represents set of app instances, like 'salesforce' or 'facebook'), or a combination of app name and app instance ID (like 'facebook.0oapsqQ6dv19pqyEo0g3') you would like as the targets of the admin role. - Only supported when used with the role type `APP_ADMIN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#target_app_list GroupRole#target_app_list}

---

##### `TargetGroupList`<sup>Optional</sup> <a name="TargetGroupList" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetGroupList"></a>

```go
TargetGroupList *[]*string
```

- *Type:* *[]*string

A list of group IDs you would like as the targets of the admin role.

* Only supported when used with the role types: `GROUP_MEMBERSHIP_ADMIN`, `HELP_DESK_ADMIN`, or `USER_ADMIN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/group_role#target_group_list GroupRole#target_group_list}

---



