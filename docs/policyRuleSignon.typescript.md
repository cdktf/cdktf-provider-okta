# `okta_policy_rule_signon`

Refer to the Terraform Registory for docs: [`okta_policy_rule_signon`](https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon).

# `policyRuleSignon` Submodule <a name="`policyRuleSignon` Submodule" id="@cdktf/provider-okta.policyRuleSignon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleSignon <a name="PolicyRuleSignon" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon okta_policy_rule_signon}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

new policyRuleSignon.PolicyRuleSignon(scope: Construct, id: string, config: PolicyRuleSignonConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig">PolicyRuleSignonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig">PolicyRuleSignonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence">putFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype">resetAuthtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence">resetFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds">resetIdentityProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime">resetMfaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt">resetMfaPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice">resetMfaRememberDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired">resetMfaRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor">resetPrimaryFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel">resetRiscLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle">resetSessionIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime">resetSessionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent">resetSessionPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFactorSequence` <a name="putFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence"></a>

```typescript
public putFactorSequence(value: IResolvable | PolicyRuleSignonFactorSequence[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>[]

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetAuthtype` <a name="resetAuthtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype"></a>

```typescript
public resetAuthtype(): void
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors"></a>

```typescript
public resetBehaviors(): void
```

##### `resetFactorSequence` <a name="resetFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence"></a>

```typescript
public resetFactorSequence(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider"></a>

```typescript
public resetIdentityProvider(): void
```

##### `resetIdentityProviderIds` <a name="resetIdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds"></a>

```typescript
public resetIdentityProviderIds(): void
```

##### `resetMfaLifetime` <a name="resetMfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime"></a>

```typescript
public resetMfaLifetime(): void
```

##### `resetMfaPrompt` <a name="resetMfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt"></a>

```typescript
public resetMfaPrompt(): void
```

##### `resetMfaRememberDevice` <a name="resetMfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice"></a>

```typescript
public resetMfaRememberDevice(): void
```

##### `resetMfaRequired` <a name="resetMfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired"></a>

```typescript
public resetMfaRequired(): void
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection"></a>

```typescript
public resetNetworkConnection(): void
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes"></a>

```typescript
public resetNetworkExcludes(): void
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes"></a>

```typescript
public resetNetworkIncludes(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetPrimaryFactor` <a name="resetPrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor"></a>

```typescript
public resetPrimaryFactor(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRiscLevel` <a name="resetRiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel"></a>

```typescript
public resetRiscLevel(): void
```

##### `resetSessionIdle` <a name="resetSessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle"></a>

```typescript
public resetSessionIdle(): void
```

##### `resetSessionLifetime` <a name="resetSessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime"></a>

```typescript
public resetSessionLifetime(): void
```

##### `resetSessionPersistent` <a name="resetSessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent"></a>

```typescript
public resetSessionPersistent(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded"></a>

```typescript
public resetUsersExcluded(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

policyRuleSignon.PolicyRuleSignon.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

policyRuleSignon.PolicyRuleSignon.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

policyRuleSignon.PolicyRuleSignon.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence">factorSequence</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput">authtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput">behaviorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput">factorSequenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput">identityProviderIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput">identityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput">mfaLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput">mfaPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput">mfaRememberDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput">mfaRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput">networkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput">networkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput">networkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput">primaryFactorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput">riscLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput">sessionIdleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput">sessionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput">sessionPersistentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput">usersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype">authtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors">behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider">identityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds">identityProviderIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime">mfaLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt">mfaPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired">mfaRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection">networkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor">primaryFactor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel">riscLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle">sessionIdle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime">sessionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent">sessionPersistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `factorSequence`<sup>Required</sup> <a name="factorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence"></a>

```typescript
public readonly factorSequence: PolicyRuleSignonFactorSequenceList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `authtypeInput`<sup>Optional</sup> <a name="authtypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput"></a>

```typescript
public readonly authtypeInput: string;
```

- *Type:* string

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput"></a>

```typescript
public readonly behaviorsInput: string[];
```

- *Type:* string[]

---

##### `factorSequenceInput`<sup>Optional</sup> <a name="factorSequenceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput"></a>

```typescript
public readonly factorSequenceInput: IResolvable | PolicyRuleSignonFactorSequence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>[]

---

##### `identityProviderIdsInput`<sup>Optional</sup> <a name="identityProviderIdsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput"></a>

```typescript
public readonly identityProviderIdsInput: string[];
```

- *Type:* string[]

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput"></a>

```typescript
public readonly identityProviderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mfaLifetimeInput`<sup>Optional</sup> <a name="mfaLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput"></a>

```typescript
public readonly mfaLifetimeInput: number;
```

- *Type:* number

---

##### `mfaPromptInput`<sup>Optional</sup> <a name="mfaPromptInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput"></a>

```typescript
public readonly mfaPromptInput: string;
```

- *Type:* string

---

##### `mfaRememberDeviceInput`<sup>Optional</sup> <a name="mfaRememberDeviceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput"></a>

```typescript
public readonly mfaRememberDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mfaRequiredInput`<sup>Optional</sup> <a name="mfaRequiredInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput"></a>

```typescript
public readonly mfaRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput"></a>

```typescript
public readonly networkConnectionInput: string;
```

- *Type:* string

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput"></a>

```typescript
public readonly networkExcludesInput: string[];
```

- *Type:* string[]

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput"></a>

```typescript
public readonly networkIncludesInput: string[];
```

- *Type:* string[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `primaryFactorInput`<sup>Optional</sup> <a name="primaryFactorInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput"></a>

```typescript
public readonly primaryFactorInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `riscLevelInput`<sup>Optional</sup> <a name="riscLevelInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput"></a>

```typescript
public readonly riscLevelInput: string;
```

- *Type:* string

---

##### `sessionIdleInput`<sup>Optional</sup> <a name="sessionIdleInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput"></a>

```typescript
public readonly sessionIdleInput: number;
```

- *Type:* number

---

##### `sessionLifetimeInput`<sup>Optional</sup> <a name="sessionLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput"></a>

```typescript
public readonly sessionLifetimeInput: number;
```

- *Type:* number

---

##### `sessionPersistentInput`<sup>Optional</sup> <a name="sessionPersistentInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput"></a>

```typescript
public readonly sessionPersistentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput"></a>

```typescript
public readonly usersExcludedInput: string[];
```

- *Type:* string[]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `authtype`<sup>Required</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype"></a>

```typescript
public readonly authtype: string;
```

- *Type:* string

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider"></a>

```typescript
public readonly identityProvider: string;
```

- *Type:* string

---

##### `identityProviderIds`<sup>Required</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds"></a>

```typescript
public readonly identityProviderIds: string[];
```

- *Type:* string[]

---

##### `mfaLifetime`<sup>Required</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime"></a>

```typescript
public readonly mfaLifetime: number;
```

- *Type:* number

---

##### `mfaPrompt`<sup>Required</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt"></a>

```typescript
public readonly mfaPrompt: string;
```

- *Type:* string

---

##### `mfaRememberDevice`<sup>Required</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice"></a>

```typescript
public readonly mfaRememberDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mfaRequired`<sup>Required</sup> <a name="mfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired"></a>

```typescript
public readonly mfaRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `primaryFactor`<sup>Required</sup> <a name="primaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor"></a>

```typescript
public readonly primaryFactor: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `riscLevel`<sup>Required</sup> <a name="riscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel"></a>

```typescript
public readonly riscLevel: string;
```

- *Type:* string

---

##### `sessionIdle`<sup>Required</sup> <a name="sessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle"></a>

```typescript
public readonly sessionIdle: number;
```

- *Type:* number

---

##### `sessionLifetime`<sup>Required</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime"></a>

```typescript
public readonly sessionLifetime: number;
```

- *Type:* number

---

##### `sessionPersistent`<sup>Required</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent"></a>

```typescript
public readonly sessionPersistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleSignonConfig <a name="PolicyRuleSignonConfig" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

const policyRuleSignonConfig: policyRuleSignon.PolicyRuleSignonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name">name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access">access</a></code> | <code>string</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype">authtype</a></code> | <code>string</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors">behaviors</a></code> | <code>string[]</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence">factorSequence</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>[]</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider">identityProvider</a></code> | <code>string</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds">identityProviderIds</a></code> | <code>string[]</code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime">mfaLifetime</a></code> | <code>number</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt">mfaPrompt</a></code> | <code>string</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired">mfaRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection">networkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId">policyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor">primaryFactor</a></code> | <code>string</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority">priority</a></code> | <code>number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel">riscLevel</a></code> | <code>string</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle">sessionIdle</a></code> | <code>number</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime">sessionLifetime</a></code> | <code>number</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent">sessionPersistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status">status</a></code> | <code>string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype"></a>

```typescript
public readonly authtype: string;
```

- *Type:* string

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

List of behavior IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}

---

##### `factorSequence`<sup>Optional</sup> <a name="factorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence"></a>

```typescript
public readonly factorSequence: IResolvable | PolicyRuleSignonFactorSequence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>[]

factor_sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider"></a>

```typescript
public readonly identityProvider: string;
```

- *Type:* string

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}

---

##### `identityProviderIds`<sup>Optional</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds"></a>

```typescript
public readonly identityProviderIds: string[];
```

- *Type:* string[]

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}

---

##### `mfaLifetime`<sup>Optional</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime"></a>

```typescript
public readonly mfaLifetime: number;
```

- *Type:* number

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}

---

##### `mfaPrompt`<sup>Optional</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt"></a>

```typescript
public readonly mfaPrompt: string;
```

- *Type:* string

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}

---

##### `mfaRememberDevice`<sup>Optional</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice"></a>

```typescript
public readonly mfaRememberDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Remember MFA device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}

---

##### `mfaRequired`<sup>Optional</sup> <a name="mfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired"></a>

```typescript
public readonly mfaRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require MFA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}

---

##### `primaryFactor`<sup>Optional</sup> <a name="primaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor"></a>

```typescript
public readonly primaryFactor: string;
```

- *Type:* string

Primary factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}

---

##### `riscLevel`<sup>Optional</sup> <a name="riscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel"></a>

```typescript
public readonly riscLevel: string;
```

- *Type:* string

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}

---

##### `sessionIdle`<sup>Optional</sup> <a name="sessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle"></a>

```typescript
public readonly sessionIdle: number;
```

- *Type:* number

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}

---

##### `sessionLifetime`<sup>Optional</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime"></a>

```typescript
public readonly sessionLifetime: number;
```

- *Type:* number

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}

---

##### `sessionPersistent`<sup>Optional</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent"></a>

```typescript
public readonly sessionPersistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}

---

### PolicyRuleSignonFactorSequence <a name="PolicyRuleSignonFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

const policyRuleSignonFactorSequence: policyRuleSignon.PolicyRuleSignonFactorSequence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>string</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria">secondaryCriteria</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>[]</code> | secondary_criteria block. |

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType"></a>

```typescript
public readonly primaryCriteriaFactorType: string;
```

- *Type:* string

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#primary_criteria_factor_type PolicyRuleSignon#primary_criteria_factor_type}

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider"></a>

```typescript
public readonly primaryCriteriaProvider: string;
```

- *Type:* string

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#primary_criteria_provider PolicyRuleSignon#primary_criteria_provider}

---

##### `secondaryCriteria`<sup>Optional</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria"></a>

```typescript
public readonly secondaryCriteria: IResolvable | PolicyRuleSignonFactorSequenceSecondaryCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>[]

secondary_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#secondary_criteria PolicyRuleSignon#secondary_criteria}

---

### PolicyRuleSignonFactorSequenceSecondaryCriteria <a name="PolicyRuleSignonFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

const policyRuleSignonFactorSequenceSecondaryCriteria: policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType">factorType</a></code> | <code>string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider">provider</a></code> | <code>string</code> | Factor provider. |

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType"></a>

```typescript
public readonly factorType: string;
```

- *Type:* string

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#factor_type PolicyRuleSignon#factor_type}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#provider PolicyRuleSignon#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleSignonFactorSequenceList <a name="PolicyRuleSignonFactorSequenceList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

new policyRuleSignon.PolicyRuleSignonFactorSequenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get"></a>

```typescript
public get(index: number): PolicyRuleSignonFactorSequenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleSignonFactorSequence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>[]

---


### PolicyRuleSignonFactorSequenceOutputReference <a name="PolicyRuleSignonFactorSequenceOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

new policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria">putSecondaryCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria">resetSecondaryCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecondaryCriteria` <a name="putSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria"></a>

```typescript
public putSecondaryCriteria(value: IResolvable | PolicyRuleSignonFactorSequenceSecondaryCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>[]

---

##### `resetSecondaryCriteria` <a name="resetSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```typescript
public resetSecondaryCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria">secondaryCriteria</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">primaryCriteriaFactorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput">primaryCriteriaProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput">secondaryCriteriaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secondaryCriteria`<sup>Required</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria"></a>

```typescript
public readonly secondaryCriteria: PolicyRuleSignonFactorSequenceSecondaryCriteriaList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a>

---

##### `primaryCriteriaFactorTypeInput`<sup>Optional</sup> <a name="primaryCriteriaFactorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```typescript
public readonly primaryCriteriaFactorTypeInput: string;
```

- *Type:* string

---

##### `primaryCriteriaProviderInput`<sup>Optional</sup> <a name="primaryCriteriaProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```typescript
public readonly primaryCriteriaProviderInput: string;
```

- *Type:* string

---

##### `secondaryCriteriaInput`<sup>Optional</sup> <a name="secondaryCriteriaInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```typescript
public readonly secondaryCriteriaInput: IResolvable | PolicyRuleSignonFactorSequenceSecondaryCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>[]

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```typescript
public readonly primaryCriteriaFactorType: string;
```

- *Type:* string

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```typescript
public readonly primaryCriteriaProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleSignonFactorSequence;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaList <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

new policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get"></a>

```typescript
public get(index: number): PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleSignonFactorSequenceSecondaryCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>[]

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```typescript
import { policyRuleSignon } from '@cdktf/provider-okta'

new policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">factorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType">factorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `factorTypeInput`<sup>Optional</sup> <a name="factorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```typescript
public readonly factorTypeInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```typescript
public readonly factorType: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleSignonFactorSequenceSecondaryCriteria;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>

---



