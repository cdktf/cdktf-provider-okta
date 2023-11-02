# `okta_security_notification_emails`

Refer to the Terraform Registory for docs: [`okta_security_notification_emails`](https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails).

# `securityNotificationEmails` Submodule <a name="`securityNotificationEmails` Submodule" id="@cdktf/provider-okta.securityNotificationEmails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationEmails <a name="SecurityNotificationEmails" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails okta_security_notification_emails}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/securitynotificationemails"

securitynotificationemails.NewSecurityNotificationEmails(scope Construct, id *string, config SecurityNotificationEmailsConfig) SecurityNotificationEmails
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig">SecurityNotificationEmailsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig">SecurityNotificationEmailsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled">ResetReportSuspiciousActivityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled">ResetSendEmailForFactorEnrollmentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled">ResetSendEmailForFactorResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled">ResetSendEmailForNewDeviceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled">ResetSendEmailForPasswordChangedEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId"></a>

```go
func ResetId()
```

##### `ResetReportSuspiciousActivityEnabled` <a name="ResetReportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled"></a>

```go
func ResetReportSuspiciousActivityEnabled()
```

##### `ResetSendEmailForFactorEnrollmentEnabled` <a name="ResetSendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled"></a>

```go
func ResetSendEmailForFactorEnrollmentEnabled()
```

##### `ResetSendEmailForFactorResetEnabled` <a name="ResetSendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled"></a>

```go
func ResetSendEmailForFactorResetEnabled()
```

##### `ResetSendEmailForNewDeviceEnabled` <a name="ResetSendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled"></a>

```go
func ResetSendEmailForNewDeviceEnabled()
```

##### `ResetSendEmailForPasswordChangedEnabled` <a name="ResetSendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled"></a>

```go
func ResetSendEmailForPasswordChangedEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/securitynotificationemails"

securitynotificationemails.SecurityNotificationEmails_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/securitynotificationemails"

securitynotificationemails.SecurityNotificationEmails_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/securitynotificationemails"

securitynotificationemails.SecurityNotificationEmails_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/securitynotificationemails"

securitynotificationemails.SecurityNotificationEmails_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityNotificationEmails to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityNotificationEmails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityNotificationEmails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput">ReportSuspiciousActivityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput">SendEmailForFactorEnrollmentEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput">SendEmailForFactorResetEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput">SendEmailForNewDeviceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput">SendEmailForPasswordChangedEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled">ReportSuspiciousActivityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled">SendEmailForFactorEnrollmentEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled">SendEmailForFactorResetEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled">SendEmailForNewDeviceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled">SendEmailForPasswordChangedEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReportSuspiciousActivityEnabledInput`<sup>Optional</sup> <a name="ReportSuspiciousActivityEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput"></a>

```go
func ReportSuspiciousActivityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForFactorEnrollmentEnabledInput`<sup>Optional</sup> <a name="SendEmailForFactorEnrollmentEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput"></a>

```go
func SendEmailForFactorEnrollmentEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForFactorResetEnabledInput`<sup>Optional</sup> <a name="SendEmailForFactorResetEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput"></a>

```go
func SendEmailForFactorResetEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForNewDeviceEnabledInput`<sup>Optional</sup> <a name="SendEmailForNewDeviceEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput"></a>

```go
func SendEmailForNewDeviceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForPasswordChangedEnabledInput`<sup>Optional</sup> <a name="SendEmailForPasswordChangedEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput"></a>

```go
func SendEmailForPasswordChangedEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReportSuspiciousActivityEnabled`<sup>Required</sup> <a name="ReportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled"></a>

```go
func ReportSuspiciousActivityEnabled() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForFactorEnrollmentEnabled`<sup>Required</sup> <a name="SendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled"></a>

```go
func SendEmailForFactorEnrollmentEnabled() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForFactorResetEnabled`<sup>Required</sup> <a name="SendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled"></a>

```go
func SendEmailForFactorResetEnabled() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForNewDeviceEnabled`<sup>Required</sup> <a name="SendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled"></a>

```go
func SendEmailForNewDeviceEnabled() interface{}
```

- *Type:* interface{}

---

##### `SendEmailForPasswordChangedEnabled`<sup>Required</sup> <a name="SendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled"></a>

```go
func SendEmailForPasswordChangedEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationEmailsConfig <a name="SecurityNotificationEmailsConfig" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/securitynotificationemails"

&securitynotificationemails.SecurityNotificationEmailsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	ReportSuspiciousActivityEnabled: interface{},
	SendEmailForFactorEnrollmentEnabled: interface{},
	SendEmailForFactorResetEnabled: interface{},
	SendEmailForNewDeviceEnabled: interface{},
	SendEmailForPasswordChangedEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled">ReportSuspiciousActivityEnabled</a></code> | <code>interface{}</code> | Notifies end users about suspicious or unrecognized activity from their account. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled">SendEmailForFactorEnrollmentEnabled</a></code> | <code>interface{}</code> | Notifies end users of any activity on their account related to MFA factor enrollment. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled">SendEmailForFactorResetEnabled</a></code> | <code>interface{}</code> | Notifies end users that one or more factors have been reset for their account. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled">SendEmailForNewDeviceEnabled</a></code> | <code>interface{}</code> | Notifies end users about new sign-on activity. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled">SendEmailForPasswordChangedEnabled</a></code> | <code>interface{}</code> | Notifies end users that the password for their account has changed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReportSuspiciousActivityEnabled`<sup>Optional</sup> <a name="ReportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled"></a>

```go
ReportSuspiciousActivityEnabled interface{}
```

- *Type:* interface{}

Notifies end users about suspicious or unrecognized activity from their account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#report_suspicious_activity_enabled SecurityNotificationEmails#report_suspicious_activity_enabled}

---

##### `SendEmailForFactorEnrollmentEnabled`<sup>Optional</sup> <a name="SendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled"></a>

```go
SendEmailForFactorEnrollmentEnabled interface{}
```

- *Type:* interface{}

Notifies end users of any activity on their account related to MFA factor enrollment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#send_email_for_factor_enrollment_enabled SecurityNotificationEmails#send_email_for_factor_enrollment_enabled}

---

##### `SendEmailForFactorResetEnabled`<sup>Optional</sup> <a name="SendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled"></a>

```go
SendEmailForFactorResetEnabled interface{}
```

- *Type:* interface{}

Notifies end users that one or more factors have been reset for their account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#send_email_for_factor_reset_enabled SecurityNotificationEmails#send_email_for_factor_reset_enabled}

---

##### `SendEmailForNewDeviceEnabled`<sup>Optional</sup> <a name="SendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled"></a>

```go
SendEmailForNewDeviceEnabled interface{}
```

- *Type:* interface{}

Notifies end users about new sign-on activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#send_email_for_new_device_enabled SecurityNotificationEmails#send_email_for_new_device_enabled}

---

##### `SendEmailForPasswordChangedEnabled`<sup>Optional</sup> <a name="SendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled"></a>

```go
SendEmailForPasswordChangedEnabled interface{}
```

- *Type:* interface{}

Notifies end users that the password for their account has changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/security_notification_emails#send_email_for_password_changed_enabled SecurityNotificationEmails#send_email_for_password_changed_enabled}

---



