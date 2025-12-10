# `emailSmtpServer` Submodule <a name="`emailSmtpServer` Submodule" id="@cdktf/provider-okta.emailSmtpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSmtpServer <a name="EmailSmtpServer" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server okta_email_smtp_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/emailsmtpserver"

emailsmtpserver.NewEmailSmtpServer(scope Construct, id *string, config EmailSmtpServerConfig) EmailSmtpServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig">EmailSmtpServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig">EmailSmtpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailSmtpServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/emailsmtpserver"

emailsmtpserver.EmailSmtpServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/emailsmtpserver"

emailsmtpserver.EmailSmtpServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/emailsmtpserver"

emailsmtpserver.EmailSmtpServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/emailsmtpserver"

emailsmtpserver.EmailSmtpServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmailSmtpServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailSmtpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailSmtpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmailSmtpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSmtpServerConfig <a name="EmailSmtpServerConfig" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/emailsmtpserver"

&emailsmtpserver.EmailSmtpServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Alias: *string,
	Host: *string,
	Password: *string,
	Port: *f64,
	Username: *string,
	Enabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.alias">Alias</a></code> | <code>*string</code> | Human-readable name for your SMTP server. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.host">Host</a></code> | <code>*string</code> | Hostname or IP address of your SMTP server. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.password">Password</a></code> | <code>*string</code> | User name of the email domain. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.port">Port</a></code> | <code>*f64</code> | Port number of your SMTP server. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.username">Username</a></code> | <code>*string</code> | Display name of the email domain. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If true, routes all email traffic through your SMTP server. |
| <code><a href="#@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#id EmailSmtpServer#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Human-readable name for your SMTP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#alias EmailSmtpServer#alias}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Hostname or IP address of your SMTP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#host EmailSmtpServer#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

User name of the email domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#password EmailSmtpServer#password}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number of your SMTP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#port EmailSmtpServer#port}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Display name of the email domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#username EmailSmtpServer#username}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If true, routes all email traffic through your SMTP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#enabled EmailSmtpServer#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.emailSmtpServer.EmailSmtpServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/email_smtp_server#id EmailSmtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



