# `okta_signon_policy_rule`

Refer to the Terraform Registory for docs: [`okta_signon_policy_rule`](https://www.terraform.io/docs/providers/okta/r/signon_policy_rule).

# `signonPolicyRule` Submodule <a name="`signonPolicyRule` Submodule" id="@cdktf/provider-okta.signonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignonPolicyRule <a name="SignonPolicyRule" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule okta_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

new signonPolicyRule.SignonPolicyRule(scope: Construct, id: string, config: SignonPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig">SignonPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig">SignonPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence">putFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype">resetAuthtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence">resetFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds">resetIdentityProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime">resetMfaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt">resetMfaPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice">resetMfaRememberDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired">resetMfaRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid">resetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor">resetPrimaryFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel">resetRiscLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle">resetSessionIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime">resetSessionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent">resetSessionPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFactorSequence` <a name="putFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence"></a>

```typescript
public putFactorSequence(value: IResolvable | SignonPolicyRuleFactorSequence[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>[]

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetAuthtype` <a name="resetAuthtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype"></a>

```typescript
public resetAuthtype(): void
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors"></a>

```typescript
public resetBehaviors(): void
```

##### `resetFactorSequence` <a name="resetFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence"></a>

```typescript
public resetFactorSequence(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider"></a>

```typescript
public resetIdentityProvider(): void
```

##### `resetIdentityProviderIds` <a name="resetIdentityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds"></a>

```typescript
public resetIdentityProviderIds(): void
```

##### `resetMfaLifetime` <a name="resetMfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime"></a>

```typescript
public resetMfaLifetime(): void
```

##### `resetMfaPrompt` <a name="resetMfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt"></a>

```typescript
public resetMfaPrompt(): void
```

##### `resetMfaRememberDevice` <a name="resetMfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice"></a>

```typescript
public resetMfaRememberDevice(): void
```

##### `resetMfaRequired` <a name="resetMfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired"></a>

```typescript
public resetMfaRequired(): void
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection"></a>

```typescript
public resetNetworkConnection(): void
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes"></a>

```typescript
public resetNetworkExcludes(): void
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes"></a>

```typescript
public resetNetworkIncludes(): void
```

##### `resetPolicyid` <a name="resetPolicyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid"></a>

```typescript
public resetPolicyid(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetPrimaryFactor` <a name="resetPrimaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor"></a>

```typescript
public resetPrimaryFactor(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRiscLevel` <a name="resetRiscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel"></a>

```typescript
public resetRiscLevel(): void
```

##### `resetSessionIdle` <a name="resetSessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle"></a>

```typescript
public resetSessionIdle(): void
```

##### `resetSessionLifetime` <a name="resetSessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime"></a>

```typescript
public resetSessionLifetime(): void
```

##### `resetSessionPersistent` <a name="resetSessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent"></a>

```typescript
public resetSessionPersistent(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded"></a>

```typescript
public resetUsersExcluded(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

signonPolicyRule.SignonPolicyRule.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

signonPolicyRule.SignonPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

signonPolicyRule.SignonPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence">factorSequence</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput">authtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput">behaviorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput">factorSequenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput">identityProviderIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput">identityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput">mfaLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput">mfaPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput">mfaRememberDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput">mfaRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput">networkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput">networkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput">networkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput">policyidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput">primaryFactorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput">riscLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput">sessionIdleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput">sessionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput">sessionPersistentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput">usersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype">authtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors">behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider">identityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds">identityProviderIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime">mfaLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt">mfaPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired">mfaRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection">networkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid">policyid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor">primaryFactor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel">riscLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle">sessionIdle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime">sessionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent">sessionPersistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `factorSequence`<sup>Required</sup> <a name="factorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence"></a>

```typescript
public readonly factorSequence: SignonPolicyRuleFactorSequenceList;
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `authtypeInput`<sup>Optional</sup> <a name="authtypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput"></a>

```typescript
public readonly authtypeInput: string;
```

- *Type:* string

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput"></a>

```typescript
public readonly behaviorsInput: string[];
```

- *Type:* string[]

---

##### `factorSequenceInput`<sup>Optional</sup> <a name="factorSequenceInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput"></a>

```typescript
public readonly factorSequenceInput: IResolvable | SignonPolicyRuleFactorSequence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>[]

---

##### `identityProviderIdsInput`<sup>Optional</sup> <a name="identityProviderIdsInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput"></a>

```typescript
public readonly identityProviderIdsInput: string[];
```

- *Type:* string[]

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput"></a>

```typescript
public readonly identityProviderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mfaLifetimeInput`<sup>Optional</sup> <a name="mfaLifetimeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput"></a>

```typescript
public readonly mfaLifetimeInput: number;
```

- *Type:* number

---

##### `mfaPromptInput`<sup>Optional</sup> <a name="mfaPromptInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput"></a>

```typescript
public readonly mfaPromptInput: string;
```

- *Type:* string

---

##### `mfaRememberDeviceInput`<sup>Optional</sup> <a name="mfaRememberDeviceInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput"></a>

```typescript
public readonly mfaRememberDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mfaRequiredInput`<sup>Optional</sup> <a name="mfaRequiredInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput"></a>

```typescript
public readonly mfaRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput"></a>

```typescript
public readonly networkConnectionInput: string;
```

- *Type:* string

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput"></a>

```typescript
public readonly networkExcludesInput: string[];
```

- *Type:* string[]

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput"></a>

```typescript
public readonly networkIncludesInput: string[];
```

- *Type:* string[]

---

##### `policyidInput`<sup>Optional</sup> <a name="policyidInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput"></a>

```typescript
public readonly policyidInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `primaryFactorInput`<sup>Optional</sup> <a name="primaryFactorInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput"></a>

```typescript
public readonly primaryFactorInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `riscLevelInput`<sup>Optional</sup> <a name="riscLevelInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput"></a>

```typescript
public readonly riscLevelInput: string;
```

- *Type:* string

---

##### `sessionIdleInput`<sup>Optional</sup> <a name="sessionIdleInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput"></a>

```typescript
public readonly sessionIdleInput: number;
```

- *Type:* number

---

##### `sessionLifetimeInput`<sup>Optional</sup> <a name="sessionLifetimeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput"></a>

```typescript
public readonly sessionLifetimeInput: number;
```

- *Type:* number

---

##### `sessionPersistentInput`<sup>Optional</sup> <a name="sessionPersistentInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput"></a>

```typescript
public readonly sessionPersistentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput"></a>

```typescript
public readonly usersExcludedInput: string[];
```

- *Type:* string[]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `authtype`<sup>Required</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype"></a>

```typescript
public readonly authtype: string;
```

- *Type:* string

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider"></a>

```typescript
public readonly identityProvider: string;
```

- *Type:* string

---

##### `identityProviderIds`<sup>Required</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds"></a>

```typescript
public readonly identityProviderIds: string[];
```

- *Type:* string[]

---

##### `mfaLifetime`<sup>Required</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime"></a>

```typescript
public readonly mfaLifetime: number;
```

- *Type:* number

---

##### `mfaPrompt`<sup>Required</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt"></a>

```typescript
public readonly mfaPrompt: string;
```

- *Type:* string

---

##### `mfaRememberDevice`<sup>Required</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice"></a>

```typescript
public readonly mfaRememberDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mfaRequired`<sup>Required</sup> <a name="mfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired"></a>

```typescript
public readonly mfaRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

---

##### `policyid`<sup>Required</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid"></a>

```typescript
public readonly policyid: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `primaryFactor`<sup>Required</sup> <a name="primaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor"></a>

```typescript
public readonly primaryFactor: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `riscLevel`<sup>Required</sup> <a name="riscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel"></a>

```typescript
public readonly riscLevel: string;
```

- *Type:* string

---

##### `sessionIdle`<sup>Required</sup> <a name="sessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle"></a>

```typescript
public readonly sessionIdle: number;
```

- *Type:* number

---

##### `sessionLifetime`<sup>Required</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime"></a>

```typescript
public readonly sessionLifetime: number;
```

- *Type:* number

---

##### `sessionPersistent`<sup>Required</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent"></a>

```typescript
public readonly sessionPersistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignonPolicyRuleConfig <a name="SignonPolicyRuleConfig" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

const signonPolicyRuleConfig: signonPolicyRule.SignonPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name">name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access">access</a></code> | <code>string</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype">authtype</a></code> | <code>string</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors">behaviors</a></code> | <code>string[]</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence">factorSequence</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>[]</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider">identityProvider</a></code> | <code>string</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds">identityProviderIds</a></code> | <code>string[]</code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime">mfaLifetime</a></code> | <code>number</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt">mfaPrompt</a></code> | <code>string</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired">mfaRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection">networkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid">policyid</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId">policyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor">primaryFactor</a></code> | <code>string</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel">riscLevel</a></code> | <code>string</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle">sessionIdle</a></code> | <code>number</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime">sessionLifetime</a></code> | <code>number</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent">sessionPersistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status">status</a></code> | <code>string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#name SignonPolicyRule#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#access SignonPolicyRule#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype"></a>

```typescript
public readonly authtype: string;
```

- *Type:* string

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#authtype SignonPolicyRule#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

List of behavior IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#behaviors SignonPolicyRule#behaviors}

---

##### `factorSequence`<sup>Optional</sup> <a name="factorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence"></a>

```typescript
public readonly factorSequence: IResolvable | SignonPolicyRuleFactorSequence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>[]

factor_sequence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_sequence SignonPolicyRule#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider"></a>

```typescript
public readonly identityProvider: string;
```

- *Type:* string

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider SignonPolicyRule#identity_provider}

---

##### `identityProviderIds`<sup>Optional</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds"></a>

```typescript
public readonly identityProviderIds: string[];
```

- *Type:* string[]

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider_ids SignonPolicyRule#identity_provider_ids}

---

##### `mfaLifetime`<sup>Optional</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime"></a>

```typescript
public readonly mfaLifetime: number;
```

- *Type:* number

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_lifetime SignonPolicyRule#mfa_lifetime}

---

##### `mfaPrompt`<sup>Optional</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt"></a>

```typescript
public readonly mfaPrompt: string;
```

- *Type:* string

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_prompt SignonPolicyRule#mfa_prompt}

---

##### `mfaRememberDevice`<sup>Optional</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice"></a>

```typescript
public readonly mfaRememberDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Remember MFA device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_remember_device SignonPolicyRule#mfa_remember_device}

---

##### `mfaRequired`<sup>Optional</sup> <a name="mfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired"></a>

```typescript
public readonly mfaRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require MFA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_required SignonPolicyRule#mfa_required}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_connection SignonPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_excludes SignonPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_includes SignonPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid"></a>

```typescript
public readonly policyid: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policyid SignonPolicyRule#policyid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policy_id SignonPolicyRule#policy_id}

---

##### `primaryFactor`<sup>Optional</sup> <a name="primaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor"></a>

```typescript
public readonly primaryFactor: string;
```

- *Type:* string

Primary factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_factor SignonPolicyRule#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#priority SignonPolicyRule#priority}

---

##### `riscLevel`<sup>Optional</sup> <a name="riscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel"></a>

```typescript
public readonly riscLevel: string;
```

- *Type:* string

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#risc_level SignonPolicyRule#risc_level}

---

##### `sessionIdle`<sup>Optional</sup> <a name="sessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle"></a>

```typescript
public readonly sessionIdle: number;
```

- *Type:* number

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_idle SignonPolicyRule#session_idle}

---

##### `sessionLifetime`<sup>Optional</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime"></a>

```typescript
public readonly sessionLifetime: number;
```

- *Type:* number

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_lifetime SignonPolicyRule#session_lifetime}

---

##### `sessionPersistent`<sup>Optional</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent"></a>

```typescript
public readonly sessionPersistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_persistent SignonPolicyRule#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#status SignonPolicyRule#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#users_excluded SignonPolicyRule#users_excluded}

---

### SignonPolicyRuleFactorSequence <a name="SignonPolicyRuleFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

const signonPolicyRuleFactorSequence: signonPolicyRule.SignonPolicyRuleFactorSequence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>string</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria">secondaryCriteria</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>[]</code> | secondary_criteria block. |

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType"></a>

```typescript
public readonly primaryCriteriaFactorType: string;
```

- *Type:* string

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_factor_type SignonPolicyRule#primary_criteria_factor_type}

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider"></a>

```typescript
public readonly primaryCriteriaProvider: string;
```

- *Type:* string

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_provider SignonPolicyRule#primary_criteria_provider}

---

##### `secondaryCriteria`<sup>Optional</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria"></a>

```typescript
public readonly secondaryCriteria: IResolvable | SignonPolicyRuleFactorSequenceSecondaryCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>[]

secondary_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#secondary_criteria SignonPolicyRule#secondary_criteria}

---

### SignonPolicyRuleFactorSequenceSecondaryCriteria <a name="SignonPolicyRuleFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

const signonPolicyRuleFactorSequenceSecondaryCriteria: signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType">factorType</a></code> | <code>string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider">provider</a></code> | <code>string</code> | Factor provider. |

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType"></a>

```typescript
public readonly factorType: string;
```

- *Type:* string

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_type SignonPolicyRule#factor_type}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#provider SignonPolicyRule#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### SignonPolicyRuleFactorSequenceList <a name="SignonPolicyRuleFactorSequenceList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

new signonPolicyRule.SignonPolicyRuleFactorSequenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get"></a>

```typescript
public get(index: number): SignonPolicyRuleFactorSequenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SignonPolicyRuleFactorSequence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>[]

---


### SignonPolicyRuleFactorSequenceOutputReference <a name="SignonPolicyRuleFactorSequenceOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

new signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria">putSecondaryCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria">resetSecondaryCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecondaryCriteria` <a name="putSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria"></a>

```typescript
public putSecondaryCriteria(value: IResolvable | SignonPolicyRuleFactorSequenceSecondaryCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>[]

---

##### `resetSecondaryCriteria` <a name="resetSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```typescript
public resetSecondaryCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria">secondaryCriteria</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">primaryCriteriaFactorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput">primaryCriteriaProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput">secondaryCriteriaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secondaryCriteria`<sup>Required</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria"></a>

```typescript
public readonly secondaryCriteria: SignonPolicyRuleFactorSequenceSecondaryCriteriaList;
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a>

---

##### `primaryCriteriaFactorTypeInput`<sup>Optional</sup> <a name="primaryCriteriaFactorTypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```typescript
public readonly primaryCriteriaFactorTypeInput: string;
```

- *Type:* string

---

##### `primaryCriteriaProviderInput`<sup>Optional</sup> <a name="primaryCriteriaProviderInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```typescript
public readonly primaryCriteriaProviderInput: string;
```

- *Type:* string

---

##### `secondaryCriteriaInput`<sup>Optional</sup> <a name="secondaryCriteriaInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```typescript
public readonly secondaryCriteriaInput: IResolvable | SignonPolicyRuleFactorSequenceSecondaryCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>[]

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```typescript
public readonly primaryCriteriaFactorType: string;
```

- *Type:* string

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```typescript
public readonly primaryCriteriaProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignonPolicyRuleFactorSequence | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a> | cdktf.IResolvable

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaList <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

new signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get"></a>

```typescript
public get(index: number): SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SignonPolicyRuleFactorSequenceSecondaryCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>[]

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```typescript
import { signonPolicyRule } from '@cdktf/provider-okta'

new signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">factorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType">factorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `factorTypeInput`<sup>Optional</sup> <a name="factorTypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```typescript
public readonly factorTypeInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```typescript
public readonly factorType: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignonPolicyRuleFactorSequenceSecondaryCriteria | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a> | cdktf.IResolvable

---



