# `passwordPolicyRule` Submodule <a name="`passwordPolicyRule` Submodule" id="@cdktf/provider-okta.passwordPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicyRule <a name="PasswordPolicyRule" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule okta_password_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer"></a>

```typescript
import { passwordPolicyRule } from '@cdktf/provider-okta'

new passwordPolicyRule.PasswordPolicyRule(scope: Construct, id: string, config: PasswordPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig">PasswordPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig">PasswordPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange">resetPasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset">resetPasswordReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock">resetPasswordUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid">resetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection"></a>

```typescript
public resetNetworkConnection(): void
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes"></a>

```typescript
public resetNetworkExcludes(): void
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes"></a>

```typescript
public resetNetworkIncludes(): void
```

##### `resetPasswordChange` <a name="resetPasswordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange"></a>

```typescript
public resetPasswordChange(): void
```

##### `resetPasswordReset` <a name="resetPasswordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset"></a>

```typescript
public resetPasswordReset(): void
```

##### `resetPasswordUnlock` <a name="resetPasswordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock"></a>

```typescript
public resetPasswordUnlock(): void
```

##### `resetPolicyid` <a name="resetPolicyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid"></a>

```typescript
public resetPolicyid(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded"></a>

```typescript
public resetUsersExcluded(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct"></a>

```typescript
import { passwordPolicyRule } from '@cdktf/provider-okta'

passwordPolicyRule.PasswordPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement"></a>

```typescript
import { passwordPolicyRule } from '@cdktf/provider-okta'

passwordPolicyRule.PasswordPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource"></a>

```typescript
import { passwordPolicyRule } from '@cdktf/provider-okta'

passwordPolicyRule.PasswordPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput">networkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput">networkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput">networkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput">passwordChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput">passwordResetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput">passwordUnlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput">policyidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput">usersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection">networkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange">passwordChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset">passwordReset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock">passwordUnlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid">policyid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput"></a>

```typescript
public readonly networkConnectionInput: string;
```

- *Type:* string

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput"></a>

```typescript
public readonly networkExcludesInput: string[];
```

- *Type:* string[]

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput"></a>

```typescript
public readonly networkIncludesInput: string[];
```

- *Type:* string[]

---

##### `passwordChangeInput`<sup>Optional</sup> <a name="passwordChangeInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput"></a>

```typescript
public readonly passwordChangeInput: string;
```

- *Type:* string

---

##### `passwordResetInput`<sup>Optional</sup> <a name="passwordResetInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput"></a>

```typescript
public readonly passwordResetInput: string;
```

- *Type:* string

---

##### `passwordUnlockInput`<sup>Optional</sup> <a name="passwordUnlockInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput"></a>

```typescript
public readonly passwordUnlockInput: string;
```

- *Type:* string

---

##### `policyidInput`<sup>Optional</sup> <a name="policyidInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput"></a>

```typescript
public readonly policyidInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput"></a>

```typescript
public readonly usersExcludedInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

---

##### `passwordChange`<sup>Required</sup> <a name="passwordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange"></a>

```typescript
public readonly passwordChange: string;
```

- *Type:* string

---

##### `passwordReset`<sup>Required</sup> <a name="passwordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset"></a>

```typescript
public readonly passwordReset: string;
```

- *Type:* string

---

##### `passwordUnlock`<sup>Required</sup> <a name="passwordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock"></a>

```typescript
public readonly passwordUnlock: string;
```

- *Type:* string

---

##### `policyid`<sup>Required</sup> <a name="policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid"></a>

```typescript
public readonly policyid: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyRuleConfig <a name="PasswordPolicyRuleConfig" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.Initializer"></a>

```typescript
import { passwordPolicyRule } from '@cdktf/provider-okta'

const passwordPolicyRuleConfig: passwordPolicyRule.PasswordPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name">name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection">networkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange">passwordChange</a></code> | <code>string</code> | Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset">passwordReset</a></code> | <code>string</code> | Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock">passwordUnlock</a></code> | <code>string</code> | Allow or deny a user to unlock. Default = DENY. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid">policyid</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId">policyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status">status</a></code> | <code>string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#name PasswordPolicyRule#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_connection PasswordPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_excludes PasswordPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_includes PasswordPolicyRule#network_includes}

---

##### `passwordChange`<sup>Optional</sup> <a name="passwordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange"></a>

```typescript
public readonly passwordChange: string;
```

- *Type:* string

Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_change PasswordPolicyRule#password_change}

---

##### `passwordReset`<sup>Optional</sup> <a name="passwordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset"></a>

```typescript
public readonly passwordReset: string;
```

- *Type:* string

Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_reset PasswordPolicyRule#password_reset}

---

##### `passwordUnlock`<sup>Optional</sup> <a name="passwordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock"></a>

```typescript
public readonly passwordUnlock: string;
```

- *Type:* string

Allow or deny a user to unlock. Default = DENY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_unlock PasswordPolicyRule#password_unlock}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid"></a>

```typescript
public readonly policyid: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policyid PasswordPolicyRule#policyid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policy_id PasswordPolicyRule#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#priority PasswordPolicyRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#status PasswordPolicyRule#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#users_excluded PasswordPolicyRule#users_excluded}

---



