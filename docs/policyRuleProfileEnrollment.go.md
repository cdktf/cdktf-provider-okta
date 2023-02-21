# `policyRuleProfileEnrollment` Submodule <a name="`policyRuleProfileEnrollment` Submodule" id="@cdktf/provider-okta.policyRuleProfileEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleProfileEnrollment <a name="PolicyRuleProfileEnrollment" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment okta_policy_rule_profile_enrollment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

policyruleprofileenrollment.NewPolicyRuleProfileEnrollment(scope Construct, id *string, config PolicyRuleProfileEnrollmentConfig) PolicyRuleProfileEnrollment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig">PolicyRuleProfileEnrollmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig">PolicyRuleProfileEnrollmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes">PutProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetEmailVerification">ResetEmailVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetInlineHookId">ResetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProfileAttributes">ResetProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetTargetGroupId">ResetTargetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetUiSchemaId">ResetUiSchemaId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProfileAttributes` <a name="PutProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes"></a>

```go
func PutProfileAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetEmailVerification` <a name="ResetEmailVerification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetEmailVerification"></a>

```go
func ResetEmailVerification()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetId"></a>

```go
func ResetId()
```

##### `ResetInlineHookId` <a name="ResetInlineHookId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetInlineHookId"></a>

```go
func ResetInlineHookId()
```

##### `ResetProfileAttributes` <a name="ResetProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProfileAttributes"></a>

```go
func ResetProfileAttributes()
```

##### `ResetTargetGroupId` <a name="ResetTargetGroupId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetTargetGroupId"></a>

```go
func ResetTargetGroupId()
```

##### `ResetUiSchemaId` <a name="ResetUiSchemaId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetUiSchemaId"></a>

```go
func ResetUiSchemaId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

policyruleprofileenrollment.PolicyRuleProfileEnrollment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

policyruleprofileenrollment.PolicyRuleProfileEnrollment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

policyruleprofileenrollment.PolicyRuleProfileEnrollment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributes">ProfileAttributes</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList">PolicyRuleProfileEnrollmentProfileAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerificationInput">EmailVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookIdInput">InlineHookIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributesInput">ProfileAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupIdInput">TargetGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaIdInput">UiSchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserActionInput">UnknownUserActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerification">EmailVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupId">TargetGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaId">UiSchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserAction">UnknownUserAction</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProfileAttributes`<sup>Required</sup> <a name="ProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributes"></a>

```go
func ProfileAttributes() PolicyRuleProfileEnrollmentProfileAttributesList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList">PolicyRuleProfileEnrollmentProfileAttributesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `EmailVerificationInput`<sup>Optional</sup> <a name="EmailVerificationInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerificationInput"></a>

```go
func EmailVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InlineHookIdInput`<sup>Optional</sup> <a name="InlineHookIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookIdInput"></a>

```go
func InlineHookIdInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ProfileAttributesInput`<sup>Optional</sup> <a name="ProfileAttributesInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributesInput"></a>

```go
func ProfileAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `TargetGroupIdInput`<sup>Optional</sup> <a name="TargetGroupIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupIdInput"></a>

```go
func TargetGroupIdInput() *string
```

- *Type:* *string

---

##### `UiSchemaIdInput`<sup>Optional</sup> <a name="UiSchemaIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaIdInput"></a>

```go
func UiSchemaIdInput() *string
```

- *Type:* *string

---

##### `UnknownUserActionInput`<sup>Optional</sup> <a name="UnknownUserActionInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserActionInput"></a>

```go
func UnknownUserActionInput() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `EmailVerification`<sup>Required</sup> <a name="EmailVerification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerification"></a>

```go
func EmailVerification() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookId"></a>

```go
func InlineHookId() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `TargetGroupId`<sup>Required</sup> <a name="TargetGroupId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupId"></a>

```go
func TargetGroupId() *string
```

- *Type:* *string

---

##### `UiSchemaId`<sup>Required</sup> <a name="UiSchemaId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaId"></a>

```go
func UiSchemaId() *string
```

- *Type:* *string

---

##### `UnknownUserAction`<sup>Required</sup> <a name="UnknownUserAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserAction"></a>

```go
func UnknownUserAction() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleProfileEnrollmentConfig <a name="PolicyRuleProfileEnrollmentConfig" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

&policyruleprofileenrollment.PolicyRuleProfileEnrollmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyId: *string,
	UnknownUserAction: *string,
	Access: *string,
	EmailVerification: interface{},
	Id: *string,
	InlineHookId: *string,
	ProfileAttributes: interface{},
	TargetGroupId: *string,
	UiSchemaId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.unknownUserAction">UnknownUserAction</a></code> | <code>*string</code> | Which action should be taken if this User is new. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.access">Access</a></code> | <code>*string</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.emailVerification">EmailVerification</a></code> | <code>interface{}</code> | Indicates whether email verification should occur before access is granted. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | ID of a Registration Inline Hook. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.profileAttributes">ProfileAttributes</a></code> | <code>interface{}</code> | profile_attributes block. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.targetGroupId">TargetGroupId</a></code> | <code>*string</code> | The ID of a Group that this User should be added to. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.uiSchemaId">UiSchemaId</a></code> | <code>*string</code> | Value created by the backend. If present all policy updates must include this attribute/value. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

ID of the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#policy_id PolicyRuleProfileEnrollment#policy_id}

---

##### `UnknownUserAction`<sup>Required</sup> <a name="UnknownUserAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.unknownUserAction"></a>

```go
UnknownUserAction *string
```

- *Type:* *string

Which action should be taken if this User is new.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#unknown_user_action PolicyRuleProfileEnrollment#unknown_user_action}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.access"></a>

```go
Access *string
```

- *Type:* *string

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#access PolicyRuleProfileEnrollment#access}

---

##### `EmailVerification`<sup>Optional</sup> <a name="EmailVerification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.emailVerification"></a>

```go
EmailVerification interface{}
```

- *Type:* interface{}

Indicates whether email verification should occur before access is granted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#email_verification PolicyRuleProfileEnrollment#email_verification}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InlineHookId`<sup>Optional</sup> <a name="InlineHookId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.inlineHookId"></a>

```go
InlineHookId *string
```

- *Type:* *string

ID of a Registration Inline Hook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#inline_hook_id PolicyRuleProfileEnrollment#inline_hook_id}

---

##### `ProfileAttributes`<sup>Optional</sup> <a name="ProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.profileAttributes"></a>

```go
ProfileAttributes interface{}
```

- *Type:* interface{}

profile_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#profile_attributes PolicyRuleProfileEnrollment#profile_attributes}

---

##### `TargetGroupId`<sup>Optional</sup> <a name="TargetGroupId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.targetGroupId"></a>

```go
TargetGroupId *string
```

- *Type:* *string

The ID of a Group that this User should be added to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#target_group_id PolicyRuleProfileEnrollment#target_group_id}

---

##### `UiSchemaId`<sup>Optional</sup> <a name="UiSchemaId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.uiSchemaId"></a>

```go
UiSchemaId *string
```

- *Type:* *string

Value created by the backend. If present all policy updates must include this attribute/value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#ui_schema_id PolicyRuleProfileEnrollment#ui_schema_id}

---

### PolicyRuleProfileEnrollmentProfileAttributes <a name="PolicyRuleProfileEnrollmentProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

&policyruleprofileenrollment.PolicyRuleProfileEnrollmentProfileAttributes {
	Label: *string,
	Name: *string,
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.label">Label</a></code> | <code>*string</code> | A display-friendly label for this property. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.name">Name</a></code> | <code>*string</code> | The name of a User Profile property. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.required">Required</a></code> | <code>interface{}</code> | Indicates if this property is required for enrollment. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.label"></a>

```go
Label *string
```

- *Type:* *string

A display-friendly label for this property.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#label PolicyRuleProfileEnrollment#label}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a User Profile property.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#name PolicyRuleProfileEnrollment#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Indicates if this property is required for enrollment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#required PolicyRuleProfileEnrollment#required}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleProfileEnrollmentProfileAttributesList <a name="PolicyRuleProfileEnrollmentProfileAttributesList" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

policyruleprofileenrollment.NewPolicyRuleProfileEnrollmentProfileAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleProfileEnrollmentProfileAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get"></a>

```go
func Get(index *f64) PolicyRuleProfileEnrollmentProfileAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleProfileEnrollmentProfileAttributesOutputReference <a name="PolicyRuleProfileEnrollmentProfileAttributesOutputReference" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleprofileenrollment"

policyruleprofileenrollment.NewPolicyRuleProfileEnrollmentProfileAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleProfileEnrollmentProfileAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



