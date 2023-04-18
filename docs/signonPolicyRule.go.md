# `okta_signon_policy_rule`

Refer to the Terraform Registory for docs: [`okta_signon_policy_rule`](https://www.terraform.io/docs/providers/okta/r/signon_policy_rule).

# `signonPolicyRule` Submodule <a name="`signonPolicyRule` Submodule" id="@cdktf/provider-okta.signonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignonPolicyRule <a name="SignonPolicyRule" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule okta_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.NewSignonPolicyRule(scope Construct, id *string, config SignonPolicyRuleConfig) SignonPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig">SignonPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig">SignonPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence">PutFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype">ResetAuthtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors">ResetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence">ResetFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider">ResetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds">ResetIdentityProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime">ResetMfaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt">ResetMfaPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice">ResetMfaRememberDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired">ResetMfaRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid">ResetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor">ResetPrimaryFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel">ResetRiscLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle">ResetSessionIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime">ResetSessionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent">ResetSessionPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFactorSequence` <a name="PutFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence"></a>

```go
func PutFactorSequence(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetAuthtype` <a name="ResetAuthtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype"></a>

```go
func ResetAuthtype()
```

##### `ResetBehaviors` <a name="ResetBehaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors"></a>

```go
func ResetBehaviors()
```

##### `ResetFactorSequence` <a name="ResetFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence"></a>

```go
func ResetFactorSequence()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProvider` <a name="ResetIdentityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider"></a>

```go
func ResetIdentityProvider()
```

##### `ResetIdentityProviderIds` <a name="ResetIdentityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds"></a>

```go
func ResetIdentityProviderIds()
```

##### `ResetMfaLifetime` <a name="ResetMfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime"></a>

```go
func ResetMfaLifetime()
```

##### `ResetMfaPrompt` <a name="ResetMfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt"></a>

```go
func ResetMfaPrompt()
```

##### `ResetMfaRememberDevice` <a name="ResetMfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice"></a>

```go
func ResetMfaRememberDevice()
```

##### `ResetMfaRequired` <a name="ResetMfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired"></a>

```go
func ResetMfaRequired()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection"></a>

```go
func ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes"></a>

```go
func ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes"></a>

```go
func ResetNetworkIncludes()
```

##### `ResetPolicyid` <a name="ResetPolicyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid"></a>

```go
func ResetPolicyid()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetPrimaryFactor` <a name="ResetPrimaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor"></a>

```go
func ResetPrimaryFactor()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRiscLevel` <a name="ResetRiscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel"></a>

```go
func ResetRiscLevel()
```

##### `ResetSessionIdle` <a name="ResetSessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle"></a>

```go
func ResetSessionIdle()
```

##### `ResetSessionLifetime` <a name="ResetSessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime"></a>

```go
func ResetSessionLifetime()
```

##### `ResetSessionPersistent` <a name="ResetSessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent"></a>

```go
func ResetSessionPersistent()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded"></a>

```go
func ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.SignonPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.SignonPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.SignonPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence">FactorSequence</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput">AuthtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput">BehaviorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput">FactorSequenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput">IdentityProviderIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput">IdentityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput">MfaLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput">MfaPromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput">MfaRememberDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput">MfaRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput">PolicyidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput">PrimaryFactorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput">RiscLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput">SessionIdleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput">SessionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput">SessionPersistentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype">Authtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors">Behaviors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds">IdentityProviderIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime">MfaLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt">MfaPrompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice">MfaRememberDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired">MfaRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid">Policyid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor">PrimaryFactor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel">RiscLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle">SessionIdle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime">SessionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent">SessionPersistent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FactorSequence`<sup>Required</sup> <a name="FactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence"></a>

```go
func FactorSequence() SignonPolicyRuleFactorSequenceList
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `AuthtypeInput`<sup>Optional</sup> <a name="AuthtypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput"></a>

```go
func AuthtypeInput() *string
```

- *Type:* *string

---

##### `BehaviorsInput`<sup>Optional</sup> <a name="BehaviorsInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput"></a>

```go
func BehaviorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FactorSequenceInput`<sup>Optional</sup> <a name="FactorSequenceInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput"></a>

```go
func FactorSequenceInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityProviderIdsInput`<sup>Optional</sup> <a name="IdentityProviderIdsInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput"></a>

```go
func IdentityProviderIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderInput`<sup>Optional</sup> <a name="IdentityProviderInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput"></a>

```go
func IdentityProviderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MfaLifetimeInput`<sup>Optional</sup> <a name="MfaLifetimeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput"></a>

```go
func MfaLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MfaPromptInput`<sup>Optional</sup> <a name="MfaPromptInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput"></a>

```go
func MfaPromptInput() *string
```

- *Type:* *string

---

##### `MfaRememberDeviceInput`<sup>Optional</sup> <a name="MfaRememberDeviceInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput"></a>

```go
func MfaRememberDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `MfaRequiredInput`<sup>Optional</sup> <a name="MfaRequiredInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput"></a>

```go
func MfaRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput"></a>

```go
func NetworkConnectionInput() *string
```

- *Type:* *string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput"></a>

```go
func NetworkExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput"></a>

```go
func NetworkIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyidInput`<sup>Optional</sup> <a name="PolicyidInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput"></a>

```go
func PolicyidInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PrimaryFactorInput`<sup>Optional</sup> <a name="PrimaryFactorInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput"></a>

```go
func PrimaryFactorInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RiscLevelInput`<sup>Optional</sup> <a name="RiscLevelInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput"></a>

```go
func RiscLevelInput() *string
```

- *Type:* *string

---

##### `SessionIdleInput`<sup>Optional</sup> <a name="SessionIdleInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput"></a>

```go
func SessionIdleInput() *f64
```

- *Type:* *f64

---

##### `SessionLifetimeInput`<sup>Optional</sup> <a name="SessionLifetimeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput"></a>

```go
func SessionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `SessionPersistentInput`<sup>Optional</sup> <a name="SessionPersistentInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput"></a>

```go
func SessionPersistentInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput"></a>

```go
func UsersExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `Authtype`<sup>Required</sup> <a name="Authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype"></a>

```go
func Authtype() *string
```

- *Type:* *string

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors"></a>

```go
func Behaviors() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider"></a>

```go
func IdentityProvider() *string
```

- *Type:* *string

---

##### `IdentityProviderIds`<sup>Required</sup> <a name="IdentityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds"></a>

```go
func IdentityProviderIds() *[]*string
```

- *Type:* *[]*string

---

##### `MfaLifetime`<sup>Required</sup> <a name="MfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime"></a>

```go
func MfaLifetime() *f64
```

- *Type:* *f64

---

##### `MfaPrompt`<sup>Required</sup> <a name="MfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt"></a>

```go
func MfaPrompt() *string
```

- *Type:* *string

---

##### `MfaRememberDevice`<sup>Required</sup> <a name="MfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice"></a>

```go
func MfaRememberDevice() interface{}
```

- *Type:* interface{}

---

##### `MfaRequired`<sup>Required</sup> <a name="MfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired"></a>

```go
func MfaRequired() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection"></a>

```go
func NetworkConnection() *string
```

- *Type:* *string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes"></a>

```go
func NetworkExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes"></a>

```go
func NetworkIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `Policyid`<sup>Required</sup> <a name="Policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid"></a>

```go
func Policyid() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `PrimaryFactor`<sup>Required</sup> <a name="PrimaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor"></a>

```go
func PrimaryFactor() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RiscLevel`<sup>Required</sup> <a name="RiscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel"></a>

```go
func RiscLevel() *string
```

- *Type:* *string

---

##### `SessionIdle`<sup>Required</sup> <a name="SessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle"></a>

```go
func SessionIdle() *f64
```

- *Type:* *f64

---

##### `SessionLifetime`<sup>Required</sup> <a name="SessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime"></a>

```go
func SessionLifetime() *f64
```

- *Type:* *f64

---

##### `SessionPersistent`<sup>Required</sup> <a name="SessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent"></a>

```go
func SessionPersistent() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded"></a>

```go
func UsersExcluded() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SignonPolicyRuleConfig <a name="SignonPolicyRuleConfig" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

&signonpolicyrule.SignonPolicyRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Access: *string,
	Authtype: *string,
	Behaviors: *[]*string,
	FactorSequence: interface{},
	Id: *string,
	IdentityProvider: *string,
	IdentityProviderIds: *[]*string,
	MfaLifetime: *f64,
	MfaPrompt: *string,
	MfaRememberDevice: interface{},
	MfaRequired: interface{},
	NetworkConnection: *string,
	NetworkExcludes: *[]*string,
	NetworkIncludes: *[]*string,
	Policyid: *string,
	PolicyId: *string,
	PrimaryFactor: *string,
	Priority: *f64,
	RiscLevel: *string,
	SessionIdle: *f64,
	SessionLifetime: *f64,
	SessionPersistent: interface{},
	Status: *string,
	UsersExcluded: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name">Name</a></code> | <code>*string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access">Access</a></code> | <code>*string</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype">Authtype</a></code> | <code>*string</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors">Behaviors</a></code> | <code>*[]*string</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence">FactorSequence</a></code> | <code>interface{}</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds">IdentityProviderIds</a></code> | <code>*[]*string</code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime">MfaLifetime</a></code> | <code>*f64</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt">MfaPrompt</a></code> | <code>*string</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice">MfaRememberDevice</a></code> | <code>interface{}</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired">MfaRequired</a></code> | <code>interface{}</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid">Policyid</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor">PrimaryFactor</a></code> | <code>*string</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel">RiscLevel</a></code> | <code>*string</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle">SessionIdle</a></code> | <code>*f64</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime">SessionLifetime</a></code> | <code>*f64</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent">SessionPersistent</a></code> | <code>interface{}</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status">Status</a></code> | <code>*string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | Set of User IDs to Exclude. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#name SignonPolicyRule#name}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access"></a>

```go
Access *string
```

- *Type:* *string

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#access SignonPolicyRule#access}

---

##### `Authtype`<sup>Optional</sup> <a name="Authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype"></a>

```go
Authtype *string
```

- *Type:* *string

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#authtype SignonPolicyRule#authtype}

---

##### `Behaviors`<sup>Optional</sup> <a name="Behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors"></a>

```go
Behaviors *[]*string
```

- *Type:* *[]*string

List of behavior IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#behaviors SignonPolicyRule#behaviors}

---

##### `FactorSequence`<sup>Optional</sup> <a name="FactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence"></a>

```go
FactorSequence interface{}
```

- *Type:* interface{}

factor_sequence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_sequence SignonPolicyRule#factor_sequence}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProvider`<sup>Optional</sup> <a name="IdentityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider"></a>

```go
IdentityProvider *string
```

- *Type:* *string

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider SignonPolicyRule#identity_provider}

---

##### `IdentityProviderIds`<sup>Optional</sup> <a name="IdentityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds"></a>

```go
IdentityProviderIds *[]*string
```

- *Type:* *[]*string

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider_ids SignonPolicyRule#identity_provider_ids}

---

##### `MfaLifetime`<sup>Optional</sup> <a name="MfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime"></a>

```go
MfaLifetime *f64
```

- *Type:* *f64

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_lifetime SignonPolicyRule#mfa_lifetime}

---

##### `MfaPrompt`<sup>Optional</sup> <a name="MfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt"></a>

```go
MfaPrompt *string
```

- *Type:* *string

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_prompt SignonPolicyRule#mfa_prompt}

---

##### `MfaRememberDevice`<sup>Optional</sup> <a name="MfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice"></a>

```go
MfaRememberDevice interface{}
```

- *Type:* interface{}

Remember MFA device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_remember_device SignonPolicyRule#mfa_remember_device}

---

##### `MfaRequired`<sup>Optional</sup> <a name="MfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired"></a>

```go
MfaRequired interface{}
```

- *Type:* interface{}

Require MFA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_required SignonPolicyRule#mfa_required}

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection"></a>

```go
NetworkConnection *string
```

- *Type:* *string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_connection SignonPolicyRule#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes"></a>

```go
NetworkExcludes *[]*string
```

- *Type:* *[]*string

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_excludes SignonPolicyRule#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes"></a>

```go
NetworkIncludes *[]*string
```

- *Type:* *[]*string

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_includes SignonPolicyRule#network_includes}

---

##### `Policyid`<sup>Optional</sup> <a name="Policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid"></a>

```go
Policyid *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policyid SignonPolicyRule#policyid}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policy_id SignonPolicyRule#policy_id}

---

##### `PrimaryFactor`<sup>Optional</sup> <a name="PrimaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor"></a>

```go
PrimaryFactor *string
```

- *Type:* *string

Primary factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_factor SignonPolicyRule#primary_factor}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#priority SignonPolicyRule#priority}

---

##### `RiscLevel`<sup>Optional</sup> <a name="RiscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel"></a>

```go
RiscLevel *string
```

- *Type:* *string

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#risc_level SignonPolicyRule#risc_level}

---

##### `SessionIdle`<sup>Optional</sup> <a name="SessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle"></a>

```go
SessionIdle *f64
```

- *Type:* *f64

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_idle SignonPolicyRule#session_idle}

---

##### `SessionLifetime`<sup>Optional</sup> <a name="SessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime"></a>

```go
SessionLifetime *f64
```

- *Type:* *f64

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_lifetime SignonPolicyRule#session_lifetime}

---

##### `SessionPersistent`<sup>Optional</sup> <a name="SessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent"></a>

```go
SessionPersistent interface{}
```

- *Type:* interface{}

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_persistent SignonPolicyRule#session_persistent}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#status SignonPolicyRule#status}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded"></a>

```go
UsersExcluded *[]*string
```

- *Type:* *[]*string

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#users_excluded SignonPolicyRule#users_excluded}

---

### SignonPolicyRuleFactorSequence <a name="SignonPolicyRuleFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

&signonpolicyrule.SignonPolicyRuleFactorSequence {
	PrimaryCriteriaFactorType: *string,
	PrimaryCriteriaProvider: *string,
	SecondaryCriteria: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType">PrimaryCriteriaFactorType</a></code> | <code>*string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider">PrimaryCriteriaProvider</a></code> | <code>*string</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria">SecondaryCriteria</a></code> | <code>interface{}</code> | secondary_criteria block. |

---

##### `PrimaryCriteriaFactorType`<sup>Required</sup> <a name="PrimaryCriteriaFactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType"></a>

```go
PrimaryCriteriaFactorType *string
```

- *Type:* *string

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_factor_type SignonPolicyRule#primary_criteria_factor_type}

---

##### `PrimaryCriteriaProvider`<sup>Required</sup> <a name="PrimaryCriteriaProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider"></a>

```go
PrimaryCriteriaProvider *string
```

- *Type:* *string

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_provider SignonPolicyRule#primary_criteria_provider}

---

##### `SecondaryCriteria`<sup>Optional</sup> <a name="SecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria"></a>

```go
SecondaryCriteria interface{}
```

- *Type:* interface{}

secondary_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#secondary_criteria SignonPolicyRule#secondary_criteria}

---

### SignonPolicyRuleFactorSequenceSecondaryCriteria <a name="SignonPolicyRuleFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

&signonpolicyrule.SignonPolicyRuleFactorSequenceSecondaryCriteria {
	FactorType: *string,
	Provider: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType">FactorType</a></code> | <code>*string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider">Provider</a></code> | <code>*string</code> | Factor provider. |

---

##### `FactorType`<sup>Required</sup> <a name="FactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType"></a>

```go
FactorType *string
```

- *Type:* *string

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_type SignonPolicyRule#factor_type}

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider"></a>

```go
Provider *string
```

- *Type:* *string

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#provider SignonPolicyRule#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### SignonPolicyRuleFactorSequenceList <a name="SignonPolicyRuleFactorSequenceList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.NewSignonPolicyRuleFactorSequenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SignonPolicyRuleFactorSequenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get"></a>

```go
func Get(index *f64) SignonPolicyRuleFactorSequenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignonPolicyRuleFactorSequenceOutputReference <a name="SignonPolicyRuleFactorSequenceOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.NewSignonPolicyRuleFactorSequenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SignonPolicyRuleFactorSequenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria">PutSecondaryCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria">ResetSecondaryCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecondaryCriteria` <a name="PutSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria"></a>

```go
func PutSecondaryCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSecondaryCriteria` <a name="ResetSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```go
func ResetSecondaryCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria">SecondaryCriteria</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">PrimaryCriteriaFactorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput">PrimaryCriteriaProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput">SecondaryCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType">PrimaryCriteriaFactorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider">PrimaryCriteriaProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecondaryCriteria`<sup>Required</sup> <a name="SecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria"></a>

```go
func SecondaryCriteria() SignonPolicyRuleFactorSequenceSecondaryCriteriaList
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a>

---

##### `PrimaryCriteriaFactorTypeInput`<sup>Optional</sup> <a name="PrimaryCriteriaFactorTypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```go
func PrimaryCriteriaFactorTypeInput() *string
```

- *Type:* *string

---

##### `PrimaryCriteriaProviderInput`<sup>Optional</sup> <a name="PrimaryCriteriaProviderInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```go
func PrimaryCriteriaProviderInput() *string
```

- *Type:* *string

---

##### `SecondaryCriteriaInput`<sup>Optional</sup> <a name="SecondaryCriteriaInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```go
func SecondaryCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryCriteriaFactorType`<sup>Required</sup> <a name="PrimaryCriteriaFactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```go
func PrimaryCriteriaFactorType() *string
```

- *Type:* *string

---

##### `PrimaryCriteriaProvider`<sup>Required</sup> <a name="PrimaryCriteriaProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```go
func PrimaryCriteriaProvider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaList <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.NewSignonPolicyRuleFactorSequenceSecondaryCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SignonPolicyRuleFactorSequenceSecondaryCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get"></a>

```go
func Get(index *f64) SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/signonpolicyrule"

signonpolicyrule.NewSignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">FactorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType">FactorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FactorTypeInput`<sup>Optional</sup> <a name="FactorTypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```go
func FactorTypeInput() *string
```

- *Type:* *string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```go
func ProviderInput() *string
```

- *Type:* *string

---

##### `FactorType`<sup>Required</sup> <a name="FactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```go
func FactorType() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



