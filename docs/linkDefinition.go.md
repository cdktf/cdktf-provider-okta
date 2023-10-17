# `okta_link_definition`

Refer to the Terraform Registory for docs: [`okta_link_definition`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition).

# `linkDefinition` Submodule <a name="`linkDefinition` Submodule" id="@cdktf/provider-okta.linkDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinkDefinition <a name="LinkDefinition" id="@cdktf/provider-okta.linkDefinition.LinkDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition okta_link_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/linkdefinition"

linkdefinition.NewLinkDefinition(scope Construct, id *string, config LinkDefinitionConfig) LinkDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig">LinkDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig">LinkDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/linkdefinition"

linkdefinition.LinkDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/linkdefinition"

linkdefinition.LinkDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/linkdefinition"

linkdefinition.LinkDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput">AssociatedDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput">AssociatedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput">AssociatedTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput">PrimaryDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput">PrimaryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput">PrimaryTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription">AssociatedDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName">AssociatedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle">AssociatedTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription">PrimaryDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName">PrimaryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle">PrimaryTitle</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedDescriptionInput`<sup>Optional</sup> <a name="AssociatedDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput"></a>

```go
func AssociatedDescriptionInput() *string
```

- *Type:* *string

---

##### `AssociatedNameInput`<sup>Optional</sup> <a name="AssociatedNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput"></a>

```go
func AssociatedNameInput() *string
```

- *Type:* *string

---

##### `AssociatedTitleInput`<sup>Optional</sup> <a name="AssociatedTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput"></a>

```go
func AssociatedTitleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrimaryDescriptionInput`<sup>Optional</sup> <a name="PrimaryDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput"></a>

```go
func PrimaryDescriptionInput() *string
```

- *Type:* *string

---

##### `PrimaryNameInput`<sup>Optional</sup> <a name="PrimaryNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput"></a>

```go
func PrimaryNameInput() *string
```

- *Type:* *string

---

##### `PrimaryTitleInput`<sup>Optional</sup> <a name="PrimaryTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput"></a>

```go
func PrimaryTitleInput() *string
```

- *Type:* *string

---

##### `AssociatedDescription`<sup>Required</sup> <a name="AssociatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription"></a>

```go
func AssociatedDescription() *string
```

- *Type:* *string

---

##### `AssociatedName`<sup>Required</sup> <a name="AssociatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName"></a>

```go
func AssociatedName() *string
```

- *Type:* *string

---

##### `AssociatedTitle`<sup>Required</sup> <a name="AssociatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle"></a>

```go
func AssociatedTitle() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrimaryDescription`<sup>Required</sup> <a name="PrimaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription"></a>

```go
func PrimaryDescription() *string
```

- *Type:* *string

---

##### `PrimaryName`<sup>Required</sup> <a name="PrimaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName"></a>

```go
func PrimaryName() *string
```

- *Type:* *string

---

##### `PrimaryTitle`<sup>Required</sup> <a name="PrimaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle"></a>

```go
func PrimaryTitle() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LinkDefinitionConfig <a name="LinkDefinitionConfig" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/linkdefinition"

&linkdefinition.LinkDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssociatedDescription: *string,
	AssociatedName: *string,
	AssociatedTitle: *string,
	PrimaryDescription: *string,
	PrimaryName: *string,
	PrimaryTitle: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription">AssociatedDescription</a></code> | <code>*string</code> | Description of the associated relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName">AssociatedName</a></code> | <code>*string</code> | API name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle">AssociatedTitle</a></code> | <code>*string</code> | Display name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription">PrimaryDescription</a></code> | <code>*string</code> | Description of the primary relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName">PrimaryName</a></code> | <code>*string</code> | API name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle">PrimaryTitle</a></code> | <code>*string</code> | Display name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#id LinkDefinition#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedDescription`<sup>Required</sup> <a name="AssociatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription"></a>

```go
AssociatedDescription *string
```

- *Type:* *string

Description of the associated relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#associated_description LinkDefinition#associated_description}

---

##### `AssociatedName`<sup>Required</sup> <a name="AssociatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName"></a>

```go
AssociatedName *string
```

- *Type:* *string

API name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#associated_name LinkDefinition#associated_name}

---

##### `AssociatedTitle`<sup>Required</sup> <a name="AssociatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle"></a>

```go
AssociatedTitle *string
```

- *Type:* *string

Display name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#associated_title LinkDefinition#associated_title}

---

##### `PrimaryDescription`<sup>Required</sup> <a name="PrimaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription"></a>

```go
PrimaryDescription *string
```

- *Type:* *string

Description of the primary relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#primary_description LinkDefinition#primary_description}

---

##### `PrimaryName`<sup>Required</sup> <a name="PrimaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName"></a>

```go
PrimaryName *string
```

- *Type:* *string

API name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#primary_name LinkDefinition#primary_name}

---

##### `PrimaryTitle`<sup>Required</sup> <a name="PrimaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle"></a>

```go
PrimaryTitle *string
```

- *Type:* *string

Display name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#primary_title LinkDefinition#primary_title}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/link_definition#id LinkDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



