# `policyRuleSignon` Submodule <a name="`policyRuleSignon` Submodule" id="@cdktf/provider-okta.policyRuleSignon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleSignon <a name="PolicyRuleSignon" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon okta_policy_rule_signon}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.NewPolicyRuleSignon(scope Construct, id *string, config PolicyRuleSignonConfig) PolicyRuleSignon
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig">PolicyRuleSignonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig">PolicyRuleSignonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence">PutFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype">ResetAuthtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors">ResetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence">ResetFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider">ResetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds">ResetIdentityProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime">ResetMfaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt">ResetMfaPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice">ResetMfaRememberDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired">ResetMfaRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor">ResetPrimaryFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel">ResetRiscLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle">ResetSessionIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime">ResetSessionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent">ResetSessionPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutFactorSequence` <a name="PutFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence"></a>

```go
func PutFactorSequence(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetAuthtype` <a name="ResetAuthtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype"></a>

```go
func ResetAuthtype()
```

##### `ResetBehaviors` <a name="ResetBehaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors"></a>

```go
func ResetBehaviors()
```

##### `ResetFactorSequence` <a name="ResetFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence"></a>

```go
func ResetFactorSequence()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProvider` <a name="ResetIdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider"></a>

```go
func ResetIdentityProvider()
```

##### `ResetIdentityProviderIds` <a name="ResetIdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds"></a>

```go
func ResetIdentityProviderIds()
```

##### `ResetMfaLifetime` <a name="ResetMfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime"></a>

```go
func ResetMfaLifetime()
```

##### `ResetMfaPrompt` <a name="ResetMfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt"></a>

```go
func ResetMfaPrompt()
```

##### `ResetMfaRememberDevice` <a name="ResetMfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice"></a>

```go
func ResetMfaRememberDevice()
```

##### `ResetMfaRequired` <a name="ResetMfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired"></a>

```go
func ResetMfaRequired()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection"></a>

```go
func ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes"></a>

```go
func ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes"></a>

```go
func ResetNetworkIncludes()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetPrimaryFactor` <a name="ResetPrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor"></a>

```go
func ResetPrimaryFactor()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRiscLevel` <a name="ResetRiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel"></a>

```go
func ResetRiscLevel()
```

##### `ResetSessionIdle` <a name="ResetSessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle"></a>

```go
func ResetSessionIdle()
```

##### `ResetSessionLifetime` <a name="ResetSessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime"></a>

```go
func ResetSessionLifetime()
```

##### `ResetSessionPersistent` <a name="ResetSessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent"></a>

```go
func ResetSessionPersistent()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded"></a>

```go
func ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyRuleSignon resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.PolicyRuleSignon_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.PolicyRuleSignon_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.PolicyRuleSignon_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.PolicyRuleSignon_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicyRuleSignon resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicyRuleSignon to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicyRuleSignon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleSignon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence">FactorSequence</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput">AuthtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput">BehaviorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput">FactorSequenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput">IdentityProviderIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput">IdentityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput">MfaLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput">MfaPromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput">MfaRememberDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput">MfaRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput">PrimaryFactorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput">RiscLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput">SessionIdleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput">SessionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput">SessionPersistentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype">Authtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors">Behaviors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds">IdentityProviderIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime">MfaLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt">MfaPrompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice">MfaRememberDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired">MfaRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor">PrimaryFactor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel">RiscLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle">SessionIdle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime">SessionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent">SessionPersistent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FactorSequence`<sup>Required</sup> <a name="FactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence"></a>

```go
func FactorSequence() PolicyRuleSignonFactorSequenceList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `AuthtypeInput`<sup>Optional</sup> <a name="AuthtypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput"></a>

```go
func AuthtypeInput() *string
```

- *Type:* *string

---

##### `BehaviorsInput`<sup>Optional</sup> <a name="BehaviorsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput"></a>

```go
func BehaviorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FactorSequenceInput`<sup>Optional</sup> <a name="FactorSequenceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput"></a>

```go
func FactorSequenceInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityProviderIdsInput`<sup>Optional</sup> <a name="IdentityProviderIdsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput"></a>

```go
func IdentityProviderIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderInput`<sup>Optional</sup> <a name="IdentityProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput"></a>

```go
func IdentityProviderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MfaLifetimeInput`<sup>Optional</sup> <a name="MfaLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput"></a>

```go
func MfaLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MfaPromptInput`<sup>Optional</sup> <a name="MfaPromptInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput"></a>

```go
func MfaPromptInput() *string
```

- *Type:* *string

---

##### `MfaRememberDeviceInput`<sup>Optional</sup> <a name="MfaRememberDeviceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput"></a>

```go
func MfaRememberDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `MfaRequiredInput`<sup>Optional</sup> <a name="MfaRequiredInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput"></a>

```go
func MfaRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput"></a>

```go
func NetworkConnectionInput() *string
```

- *Type:* *string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput"></a>

```go
func NetworkExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput"></a>

```go
func NetworkIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PrimaryFactorInput`<sup>Optional</sup> <a name="PrimaryFactorInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput"></a>

```go
func PrimaryFactorInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RiscLevelInput`<sup>Optional</sup> <a name="RiscLevelInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput"></a>

```go
func RiscLevelInput() *string
```

- *Type:* *string

---

##### `SessionIdleInput`<sup>Optional</sup> <a name="SessionIdleInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput"></a>

```go
func SessionIdleInput() *f64
```

- *Type:* *f64

---

##### `SessionLifetimeInput`<sup>Optional</sup> <a name="SessionLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput"></a>

```go
func SessionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `SessionPersistentInput`<sup>Optional</sup> <a name="SessionPersistentInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput"></a>

```go
func SessionPersistentInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput"></a>

```go
func UsersExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `Authtype`<sup>Required</sup> <a name="Authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype"></a>

```go
func Authtype() *string
```

- *Type:* *string

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors"></a>

```go
func Behaviors() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider"></a>

```go
func IdentityProvider() *string
```

- *Type:* *string

---

##### `IdentityProviderIds`<sup>Required</sup> <a name="IdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds"></a>

```go
func IdentityProviderIds() *[]*string
```

- *Type:* *[]*string

---

##### `MfaLifetime`<sup>Required</sup> <a name="MfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime"></a>

```go
func MfaLifetime() *f64
```

- *Type:* *f64

---

##### `MfaPrompt`<sup>Required</sup> <a name="MfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt"></a>

```go
func MfaPrompt() *string
```

- *Type:* *string

---

##### `MfaRememberDevice`<sup>Required</sup> <a name="MfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice"></a>

```go
func MfaRememberDevice() interface{}
```

- *Type:* interface{}

---

##### `MfaRequired`<sup>Required</sup> <a name="MfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired"></a>

```go
func MfaRequired() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection"></a>

```go
func NetworkConnection() *string
```

- *Type:* *string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes"></a>

```go
func NetworkExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes"></a>

```go
func NetworkIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `PrimaryFactor`<sup>Required</sup> <a name="PrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor"></a>

```go
func PrimaryFactor() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RiscLevel`<sup>Required</sup> <a name="RiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel"></a>

```go
func RiscLevel() *string
```

- *Type:* *string

---

##### `SessionIdle`<sup>Required</sup> <a name="SessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle"></a>

```go
func SessionIdle() *f64
```

- *Type:* *f64

---

##### `SessionLifetime`<sup>Required</sup> <a name="SessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime"></a>

```go
func SessionLifetime() *f64
```

- *Type:* *f64

---

##### `SessionPersistent`<sup>Required</sup> <a name="SessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent"></a>

```go
func SessionPersistent() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded"></a>

```go
func UsersExcluded() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleSignonConfig <a name="PolicyRuleSignonConfig" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

&policyrulesignon.PolicyRuleSignonConfig {
	Connection: interface{},
	Count: interface{},
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
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name">Name</a></code> | <code>*string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access">Access</a></code> | <code>*string</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype">Authtype</a></code> | <code>*string</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors">Behaviors</a></code> | <code>*[]*string</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence">FactorSequence</a></code> | <code>interface{}</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds">IdentityProviderIds</a></code> | <code>*[]*string</code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime">MfaLifetime</a></code> | <code>*f64</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt">MfaPrompt</a></code> | <code>*string</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice">MfaRememberDevice</a></code> | <code>interface{}</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired">MfaRequired</a></code> | <code>interface{}</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor">PrimaryFactor</a></code> | <code>*string</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel">RiscLevel</a></code> | <code>*string</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle">SessionIdle</a></code> | <code>*f64</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime">SessionLifetime</a></code> | <code>*f64</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent">SessionPersistent</a></code> | <code>interface{}</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status">Status</a></code> | <code>*string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | Set of User IDs to Exclude. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access"></a>

```go
Access *string
```

- *Type:* *string

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}

---

##### `Authtype`<sup>Optional</sup> <a name="Authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype"></a>

```go
Authtype *string
```

- *Type:* *string

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}

---

##### `Behaviors`<sup>Optional</sup> <a name="Behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors"></a>

```go
Behaviors *[]*string
```

- *Type:* *[]*string

List of behavior IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}

---

##### `FactorSequence`<sup>Optional</sup> <a name="FactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence"></a>

```go
FactorSequence interface{}
```

- *Type:* interface{}

factor_sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProvider`<sup>Optional</sup> <a name="IdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider"></a>

```go
IdentityProvider *string
```

- *Type:* *string

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}

---

##### `IdentityProviderIds`<sup>Optional</sup> <a name="IdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds"></a>

```go
IdentityProviderIds *[]*string
```

- *Type:* *[]*string

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}

---

##### `MfaLifetime`<sup>Optional</sup> <a name="MfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime"></a>

```go
MfaLifetime *f64
```

- *Type:* *f64

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}

---

##### `MfaPrompt`<sup>Optional</sup> <a name="MfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt"></a>

```go
MfaPrompt *string
```

- *Type:* *string

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}

---

##### `MfaRememberDevice`<sup>Optional</sup> <a name="MfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice"></a>

```go
MfaRememberDevice interface{}
```

- *Type:* interface{}

Remember MFA device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}

---

##### `MfaRequired`<sup>Optional</sup> <a name="MfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired"></a>

```go
MfaRequired interface{}
```

- *Type:* interface{}

Require MFA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection"></a>

```go
NetworkConnection *string
```

- *Type:* *string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes"></a>

```go
NetworkExcludes *[]*string
```

- *Type:* *[]*string

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes"></a>

```go
NetworkIncludes *[]*string
```

- *Type:* *[]*string

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}

---

##### `PrimaryFactor`<sup>Optional</sup> <a name="PrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor"></a>

```go
PrimaryFactor *string
```

- *Type:* *string

Primary factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}

---

##### `RiscLevel`<sup>Optional</sup> <a name="RiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel"></a>

```go
RiscLevel *string
```

- *Type:* *string

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}

---

##### `SessionIdle`<sup>Optional</sup> <a name="SessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle"></a>

```go
SessionIdle *f64
```

- *Type:* *f64

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}

---

##### `SessionLifetime`<sup>Optional</sup> <a name="SessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime"></a>

```go
SessionLifetime *f64
```

- *Type:* *f64

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}

---

##### `SessionPersistent`<sup>Optional</sup> <a name="SessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent"></a>

```go
SessionPersistent interface{}
```

- *Type:* interface{}

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded"></a>

```go
UsersExcluded *[]*string
```

- *Type:* *[]*string

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}

---

### PolicyRuleSignonFactorSequence <a name="PolicyRuleSignonFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

&policyrulesignon.PolicyRuleSignonFactorSequence {
	PrimaryCriteriaFactorType: *string,
	PrimaryCriteriaProvider: *string,
	SecondaryCriteria: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType">PrimaryCriteriaFactorType</a></code> | <code>*string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider">PrimaryCriteriaProvider</a></code> | <code>*string</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria">SecondaryCriteria</a></code> | <code>interface{}</code> | secondary_criteria block. |

---

##### `PrimaryCriteriaFactorType`<sup>Required</sup> <a name="PrimaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType"></a>

```go
PrimaryCriteriaFactorType *string
```

- *Type:* *string

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#primary_criteria_factor_type PolicyRuleSignon#primary_criteria_factor_type}

---

##### `PrimaryCriteriaProvider`<sup>Required</sup> <a name="PrimaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider"></a>

```go
PrimaryCriteriaProvider *string
```

- *Type:* *string

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#primary_criteria_provider PolicyRuleSignon#primary_criteria_provider}

---

##### `SecondaryCriteria`<sup>Optional</sup> <a name="SecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria"></a>

```go
SecondaryCriteria interface{}
```

- *Type:* interface{}

secondary_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#secondary_criteria PolicyRuleSignon#secondary_criteria}

---

### PolicyRuleSignonFactorSequenceSecondaryCriteria <a name="PolicyRuleSignonFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

&policyrulesignon.PolicyRuleSignonFactorSequenceSecondaryCriteria {
	FactorType: *string,
	Provider: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType">FactorType</a></code> | <code>*string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider">Provider</a></code> | <code>*string</code> | Factor provider. |

---

##### `FactorType`<sup>Required</sup> <a name="FactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType"></a>

```go
FactorType *string
```

- *Type:* *string

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#factor_type PolicyRuleSignon#factor_type}

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider"></a>

```go
Provider *string
```

- *Type:* *string

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_signon#provider PolicyRuleSignon#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleSignonFactorSequenceList <a name="PolicyRuleSignonFactorSequenceList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.NewPolicyRuleSignonFactorSequenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleSignonFactorSequenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get"></a>

```go
func Get(index *f64) PolicyRuleSignonFactorSequenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleSignonFactorSequenceOutputReference <a name="PolicyRuleSignonFactorSequenceOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.NewPolicyRuleSignonFactorSequenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleSignonFactorSequenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria">PutSecondaryCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria">ResetSecondaryCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecondaryCriteria` <a name="PutSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria"></a>

```go
func PutSecondaryCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSecondaryCriteria` <a name="ResetSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```go
func ResetSecondaryCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria">SecondaryCriteria</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">PrimaryCriteriaFactorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput">PrimaryCriteriaProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput">SecondaryCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType">PrimaryCriteriaFactorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider">PrimaryCriteriaProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecondaryCriteria`<sup>Required</sup> <a name="SecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria"></a>

```go
func SecondaryCriteria() PolicyRuleSignonFactorSequenceSecondaryCriteriaList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a>

---

##### `PrimaryCriteriaFactorTypeInput`<sup>Optional</sup> <a name="PrimaryCriteriaFactorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```go
func PrimaryCriteriaFactorTypeInput() *string
```

- *Type:* *string

---

##### `PrimaryCriteriaProviderInput`<sup>Optional</sup> <a name="PrimaryCriteriaProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```go
func PrimaryCriteriaProviderInput() *string
```

- *Type:* *string

---

##### `SecondaryCriteriaInput`<sup>Optional</sup> <a name="SecondaryCriteriaInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```go
func SecondaryCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryCriteriaFactorType`<sup>Required</sup> <a name="PrimaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```go
func PrimaryCriteriaFactorType() *string
```

- *Type:* *string

---

##### `PrimaryCriteriaProvider`<sup>Required</sup> <a name="PrimaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```go
func PrimaryCriteriaProvider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaList <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.NewPolicyRuleSignonFactorSequenceSecondaryCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleSignonFactorSequenceSecondaryCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get"></a>

```go
func Get(index *f64) PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulesignon"

policyrulesignon.NewPolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">FactorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType">FactorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FactorTypeInput`<sup>Optional</sup> <a name="FactorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```go
func FactorTypeInput() *string
```

- *Type:* *string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```go
func ProviderInput() *string
```

- *Type:* *string

---

##### `FactorType`<sup>Required</sup> <a name="FactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```go
func FactorType() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



