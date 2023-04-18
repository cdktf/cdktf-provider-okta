# `okta_mfa_policy_rule`

Refer to the Terraform Registory for docs: [`okta_mfa_policy_rule`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule).

# `mfaPolicyRule` Submodule <a name="`mfaPolicyRule` Submodule" id="@cdktf/provider-okta.mfaPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicyRule <a name="MfaPolicyRule" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule okta_mfa_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

new mfaPolicyRule.MfaPolicyRule(scope: Construct, id: string, config: MfaPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig">MfaPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig">MfaPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude">putAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude">putAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppExclude">resetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppInclude">resetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetEnroll">resetEnroll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyid">resetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAppExclude` <a name="putAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude"></a>

```typescript
public putAppExclude(value: IResolvable | MfaPolicyRuleAppExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>[]

---

##### `putAppInclude` <a name="putAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude"></a>

```typescript
public putAppInclude(value: IResolvable | MfaPolicyRuleAppInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>[]

---

##### `resetAppExclude` <a name="resetAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppExclude"></a>

```typescript
public resetAppExclude(): void
```

##### `resetAppInclude` <a name="resetAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppInclude"></a>

```typescript
public resetAppInclude(): void
```

##### `resetEnroll` <a name="resetEnroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetEnroll"></a>

```typescript
public resetEnroll(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkConnection"></a>

```typescript
public resetNetworkConnection(): void
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkExcludes"></a>

```typescript
public resetNetworkExcludes(): void
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkIncludes"></a>

```typescript
public resetNetworkIncludes(): void
```

##### `resetPolicyid` <a name="resetPolicyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyid"></a>

```typescript
public resetPolicyid(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetUsersExcluded"></a>

```typescript
public resetUsersExcluded(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

mfaPolicyRule.MfaPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

mfaPolicyRule.MfaPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

mfaPolicyRule.MfaPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExclude">appExclude</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList">MfaPolicyRuleAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appInclude">appInclude</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList">MfaPolicyRuleAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExcludeInput">appExcludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appIncludeInput">appIncludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enrollInput">enrollInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnectionInput">networkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludesInput">networkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludesInput">networkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyidInput">policyidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcludedInput">usersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enroll">enroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnection">networkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyid">policyid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appExclude`<sup>Required</sup> <a name="appExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExclude"></a>

```typescript
public readonly appExclude: MfaPolicyRuleAppExcludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList">MfaPolicyRuleAppExcludeList</a>

---

##### `appInclude`<sup>Required</sup> <a name="appInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appInclude"></a>

```typescript
public readonly appInclude: MfaPolicyRuleAppIncludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList">MfaPolicyRuleAppIncludeList</a>

---

##### `appExcludeInput`<sup>Optional</sup> <a name="appExcludeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExcludeInput"></a>

```typescript
public readonly appExcludeInput: IResolvable | MfaPolicyRuleAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>[]

---

##### `appIncludeInput`<sup>Optional</sup> <a name="appIncludeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appIncludeInput"></a>

```typescript
public readonly appIncludeInput: IResolvable | MfaPolicyRuleAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>[]

---

##### `enrollInput`<sup>Optional</sup> <a name="enrollInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enrollInput"></a>

```typescript
public readonly enrollInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnectionInput"></a>

```typescript
public readonly networkConnectionInput: string;
```

- *Type:* string

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludesInput"></a>

```typescript
public readonly networkExcludesInput: string[];
```

- *Type:* string[]

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludesInput"></a>

```typescript
public readonly networkIncludesInput: string[];
```

- *Type:* string[]

---

##### `policyidInput`<sup>Optional</sup> <a name="policyidInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyidInput"></a>

```typescript
public readonly policyidInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcludedInput"></a>

```typescript
public readonly usersExcludedInput: string[];
```

- *Type:* string[]

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enroll"></a>

```typescript
public readonly enroll: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

---

##### `policyid`<sup>Required</sup> <a name="policyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyid"></a>

```typescript
public readonly policyid: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyRuleAppExclude <a name="MfaPolicyRuleAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

const mfaPolicyRuleAppExclude: mfaPolicyRule.MfaPolicyRuleAppExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}.

---

### MfaPolicyRuleAppInclude <a name="MfaPolicyRuleAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

const mfaPolicyRuleAppInclude: mfaPolicyRule.MfaPolicyRuleAppInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}.

---

### MfaPolicyRuleConfig <a name="MfaPolicyRuleConfig" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

const mfaPolicyRuleConfig: mfaPolicyRule.MfaPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.name">name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appExclude">appExclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>[]</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appInclude">appInclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>[]</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.enroll">enroll</a></code> | <code>string</code> | Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER? |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkConnection">networkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyid">policyid</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyId">policyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.status">status</a></code> | <code>string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appExclude"></a>

```typescript
public readonly appExclude: IResolvable | MfaPolicyRuleAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>[]

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#app_exclude MfaPolicyRule#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appInclude"></a>

```typescript
public readonly appInclude: IResolvable | MfaPolicyRuleAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>[]

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#app_include MfaPolicyRule#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.enroll"></a>

```typescript
public readonly enroll: string;
```

- *Type:* string

Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#enroll MfaPolicyRule#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#network_connection MfaPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#network_excludes MfaPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#network_includes MfaPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyid"></a>

```typescript
public readonly policyid: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#policyid MfaPolicyRule#policyid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#policy_id MfaPolicyRule#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#priority MfaPolicyRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#status MfaPolicyRule#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#users_excluded MfaPolicyRule#users_excluded}

---

## Classes <a name="Classes" id="Classes"></a>

### MfaPolicyRuleAppExcludeList <a name="MfaPolicyRuleAppExcludeList" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

new mfaPolicyRule.MfaPolicyRuleAppExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get"></a>

```typescript
public get(index: number): MfaPolicyRuleAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MfaPolicyRuleAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>[]

---


### MfaPolicyRuleAppExcludeOutputReference <a name="MfaPolicyRuleAppExcludeOutputReference" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

new mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MfaPolicyRuleAppExclude | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a> | cdktf.IResolvable

---


### MfaPolicyRuleAppIncludeList <a name="MfaPolicyRuleAppIncludeList" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

new mfaPolicyRule.MfaPolicyRuleAppIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get"></a>

```typescript
public get(index: number): MfaPolicyRuleAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MfaPolicyRuleAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>[]

---


### MfaPolicyRuleAppIncludeOutputReference <a name="MfaPolicyRuleAppIncludeOutputReference" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer"></a>

```typescript
import { mfaPolicyRule } from '@cdktf/provider-okta'

new mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MfaPolicyRuleAppInclude | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a> | cdktf.IResolvable

---



