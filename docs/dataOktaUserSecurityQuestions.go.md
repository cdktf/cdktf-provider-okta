# `dataOktaUserSecurityQuestions` Submodule <a name="`dataOktaUserSecurityQuestions` Submodule" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUserSecurityQuestions <a name="DataOktaUserSecurityQuestions" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/data-sources/user_security_questions okta_user_security_questions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

dataoktausersecurityquestions.NewDataOktaUserSecurityQuestions(scope Construct, id *string, config DataOktaUserSecurityQuestionsConfig) DataOktaUserSecurityQuestions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig">DataOktaUserSecurityQuestionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig">DataOktaUserSecurityQuestionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaUserSecurityQuestions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

dataoktausersecurityquestions.DataOktaUserSecurityQuestions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

dataoktausersecurityquestions.DataOktaUserSecurityQuestions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

dataoktausersecurityquestions.DataOktaUserSecurityQuestions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

dataoktausersecurityquestions.DataOktaUserSecurityQuestions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOktaUserSecurityQuestions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOktaUserSecurityQuestions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOktaUserSecurityQuestions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/data-sources/user_security_questions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaUserSecurityQuestions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.questions">Questions</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList">DataOktaUserSecurityQuestionsQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Questions`<sup>Required</sup> <a name="Questions" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.questions"></a>

```go
func Questions() DataOktaUserSecurityQuestionsQuestionsList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList">DataOktaUserSecurityQuestionsQuestionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUserSecurityQuestionsConfig <a name="DataOktaUserSecurityQuestionsConfig" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

&dataoktausersecurityquestions.DataOktaUserSecurityQuestionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.userId">UserId</a></code> | <code>*string</code> | ID of a Okta User. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/data-sources/user_security_questions#id DataOktaUserSecurityQuestions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

ID of a Okta User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/data-sources/user_security_questions#user_id DataOktaUserSecurityQuestions#user_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/data-sources/user_security_questions#id DataOktaUserSecurityQuestions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaUserSecurityQuestionsQuestions <a name="DataOktaUserSecurityQuestionsQuestions" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

&dataoktausersecurityquestions.DataOktaUserSecurityQuestionsQuestions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaUserSecurityQuestionsQuestionsList <a name="DataOktaUserSecurityQuestionsQuestionsList" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

dataoktausersecurityquestions.NewDataOktaUserSecurityQuestionsQuestionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOktaUserSecurityQuestionsQuestionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.get"></a>

```go
func Get(index *f64) DataOktaUserSecurityQuestionsQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOktaUserSecurityQuestionsQuestionsOutputReference <a name="DataOktaUserSecurityQuestionsQuestionsOutputReference" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktausersecurityquestions"

dataoktausersecurityquestions.NewDataOktaUserSecurityQuestionsQuestionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOktaUserSecurityQuestionsQuestionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestions">DataOktaUserSecurityQuestionsQuestions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOktaUserSecurityQuestionsQuestions
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUserSecurityQuestions.DataOktaUserSecurityQuestionsQuestions">DataOktaUserSecurityQuestionsQuestions</a>

---



