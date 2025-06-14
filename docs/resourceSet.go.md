# `resourceSet` Submodule <a name="`resourceSet` Submodule" id="@cdktf/provider-okta.resourceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceSet <a name="ResourceSet" id="@cdktf/provider-okta.resourceSet.ResourceSet"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set okta_resource_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.resourceSet.ResourceSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/resourceset"

resourceset.NewResourceSet(scope Construct, id *string, config ResourceSetConfig) ResourceSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig">ResourceSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.resourceSet.ResourceSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.resourceSet.ResourceSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.resourceSet.ResourceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig">ResourceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.resetResourcesOrn">ResetResourcesOrn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.resourceSet.ResourceSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.resourceSet.ResourceSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.resourceSet.ResourceSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.resourceSet.ResourceSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.resourceSet.ResourceSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.resourceSet.ResourceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.resourceSet.ResourceSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.resourceSet.ResourceSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.resourceSet.ResourceSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.resourceSet.ResourceSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.resourceSet.ResourceSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.resourceSet.ResourceSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.resourceSet.ResourceSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.resourceSet.ResourceSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.resourceSet.ResourceSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.resourceSet.ResourceSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.resourceSet.ResourceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.resourceSet.ResourceSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.resourceSet.ResourceSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.resourceSet.ResourceSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.resourceSet.ResourceSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.resourceSet.ResourceSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.resourceSet.ResourceSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.resourceSet.ResourceSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.resourceSet.ResourceSet.resetId"></a>

```go
func ResetId()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-okta.resourceSet.ResourceSet.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourcesOrn` <a name="ResetResourcesOrn" id="@cdktf/provider-okta.resourceSet.ResourceSet.resetResourcesOrn"></a>

```go
func ResetResourcesOrn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.resourceSet.ResourceSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/resourceset"

resourceset.ResourceSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.resourceSet.ResourceSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.resourceSet.ResourceSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/resourceset"

resourceset.ResourceSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.resourceSet.ResourceSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.resourceSet.ResourceSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/resourceset"

resourceset.ResourceSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.resourceSet.ResourceSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.resourceSet.ResourceSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/resourceset"

resourceset.ResourceSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourceSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.resourceSet.ResourceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.resourceSet.ResourceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.resourceSet.ResourceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.resourceSet.ResourceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.resourcesOrnInput">ResourcesOrnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.resourcesOrn">ResourcesOrn</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesOrnInput`<sup>Optional</sup> <a name="ResourcesOrnInput" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.resourcesOrnInput"></a>

```go
func ResourcesOrnInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesOrn`<sup>Required</sup> <a name="ResourcesOrn" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.resourcesOrn"></a>

```go
func ResourcesOrn() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.resourceSet.ResourceSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceSetConfig <a name="ResourceSetConfig" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/resourceset"

&resourceset.ResourceSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Label: *string,
	Id: *string,
	Resources: *[]*string,
	ResourcesOrn: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.description">Description</a></code> | <code>*string</code> | A description of the Resource Set. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.label">Label</a></code> | <code>*string</code> | Unique name given to the Resource Set. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set#id ResourceSet#id}. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.resources">Resources</a></code> | <code>*[]*string</code> | The endpoints that reference the resources to be included in the new Resource Set. |
| <code><a href="#@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.resourcesOrn">ResourcesOrn</a></code> | <code>*[]*string</code> | The orn(Okta Resource Name) that reference the resources to be included in the new Resource Set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the Resource Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set#description ResourceSet#description}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Unique name given to the Resource Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set#label ResourceSet#label}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set#id ResourceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

The endpoints that reference the resources to be included in the new Resource Set.

At least one endpoint must be specified when creating resource set. Only one of 'resources' or 'resources_orn' can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set#resources ResourceSet#resources}

---

##### `ResourcesOrn`<sup>Optional</sup> <a name="ResourcesOrn" id="@cdktf/provider-okta.resourceSet.ResourceSetConfig.property.resourcesOrn"></a>

```go
ResourcesOrn *[]*string
```

- *Type:* *[]*string

The orn(Okta Resource Name) that reference the resources to be included in the new Resource Set.

At least one orn must be specified when creating resource set. Only one of 'resources' or 'resources_orn' can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/resource_set#resources_orn ResourceSet#resources_orn}

---



