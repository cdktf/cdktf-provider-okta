# `data_okta_app_metadata_saml`

Refer to the Terraform Registory for docs: [`data_okta_app_metadata_saml`](https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml).

# `dataOktaAppMetadataSaml` Submodule <a name="`dataOktaAppMetadataSaml` Submodule" id="@cdktf/provider-okta.dataOktaAppMetadataSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaAppMetadataSaml <a name="DataOktaAppMetadataSaml" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml okta_app_metadata_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v8/dataoktaappmetadatasaml"

dataoktaappmetadatasaml.NewDataOktaAppMetadataSaml(scope Construct, id *string, config DataOktaAppMetadataSamlConfig) DataOktaAppMetadataSaml
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig">DataOktaAppMetadataSamlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig">DataOktaAppMetadataSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.resetKeyId"></a>

```go
func ResetKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v8/dataoktaappmetadatasaml"

dataoktaappmetadatasaml.DataOktaAppMetadataSaml_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v8/dataoktaappmetadatasaml"

dataoktaappmetadatasaml.DataOktaAppMetadataSaml_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v8/dataoktaappmetadatasaml"

dataoktaappmetadatasaml.DataOktaAppMetadataSaml_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.httpPostBinding">HttpPostBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.httpRedirectBinding">HttpRedirectBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.wantAuthnRequestsSigned">WantAuthnRequestsSigned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `HttpPostBinding`<sup>Required</sup> <a name="HttpPostBinding" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.httpPostBinding"></a>

```go
func HttpPostBinding() *string
```

- *Type:* *string

---

##### `HttpRedirectBinding`<sup>Required</sup> <a name="HttpRedirectBinding" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.httpRedirectBinding"></a>

```go
func HttpRedirectBinding() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `WantAuthnRequestsSigned`<sup>Required</sup> <a name="WantAuthnRequestsSigned" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.wantAuthnRequestsSigned"></a>

```go
func WantAuthnRequestsSigned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSaml.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAppMetadataSamlConfig <a name="DataOktaAppMetadataSamlConfig" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v8/dataoktaappmetadatasaml"

&dataoktaappmetadatasaml.DataOktaAppMetadataSamlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Id: *string,
	KeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml#app_id DataOktaAppMetadataSaml#app_id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml#id DataOktaAppMetadataSaml#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml#key_id DataOktaAppMetadataSaml#key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml#app_id DataOktaAppMetadataSaml#app_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml#id DataOktaAppMetadataSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-okta.dataOktaAppMetadataSaml.DataOktaAppMetadataSamlConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app_metadata_saml#key_id DataOktaAppMetadataSaml#key_id}.

---



