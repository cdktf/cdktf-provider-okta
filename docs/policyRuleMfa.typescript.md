# `okta_policy_rule_mfa`

Refer to the Terraform Registory for docs: [`okta_policy_rule_mfa`](https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa).

# `policyRuleMfa` Submodule <a name="`policyRuleMfa` Submodule" id="@cdktf/provider-okta.policyRuleMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleMfa <a name="PolicyRuleMfa" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa okta_policy_rule_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

new policyRuleMfa.PolicyRuleMfa(scope: Construct, id: string, config: PolicyRuleMfaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig">PolicyRuleMfaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig">PolicyRuleMfaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude">putAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude">putAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude">resetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude">resetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll">resetEnroll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAppExclude` <a name="putAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude"></a>

```typescript
public putAppExclude(value: IResolvable | PolicyRuleMfaAppExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>[]

---

##### `putAppInclude` <a name="putAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude"></a>

```typescript
public putAppInclude(value: IResolvable | PolicyRuleMfaAppInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>[]

---

##### `resetAppExclude` <a name="resetAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude"></a>

```typescript
public resetAppExclude(): void
```

##### `resetAppInclude` <a name="resetAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude"></a>

```typescript
public resetAppInclude(): void
```

##### `resetEnroll` <a name="resetEnroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll"></a>

```typescript
public resetEnroll(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection"></a>

```typescript
public resetNetworkConnection(): void
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes"></a>

```typescript
public resetNetworkExcludes(): void
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes"></a>

```typescript
public resetNetworkIncludes(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded"></a>

```typescript
public resetUsersExcluded(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyRuleMfa resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

policyRuleMfa.PolicyRuleMfa.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

policyRuleMfa.PolicyRuleMfa.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

policyRuleMfa.PolicyRuleMfa.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

policyRuleMfa.PolicyRuleMfa.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyRuleMfa resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyRuleMfa to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyRuleMfa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleMfa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude">appExclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude">appInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput">appExcludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput">appIncludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput">enrollInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput">networkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput">networkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput">networkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput">usersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll">enroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection">networkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appExclude`<sup>Required</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude"></a>

```typescript
public readonly appExclude: PolicyRuleMfaAppExcludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a>

---

##### `appInclude`<sup>Required</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude"></a>

```typescript
public readonly appInclude: PolicyRuleMfaAppIncludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a>

---

##### `appExcludeInput`<sup>Optional</sup> <a name="appExcludeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput"></a>

```typescript
public readonly appExcludeInput: IResolvable | PolicyRuleMfaAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>[]

---

##### `appIncludeInput`<sup>Optional</sup> <a name="appIncludeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput"></a>

```typescript
public readonly appIncludeInput: IResolvable | PolicyRuleMfaAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>[]

---

##### `enrollInput`<sup>Optional</sup> <a name="enrollInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput"></a>

```typescript
public readonly enrollInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput"></a>

```typescript
public readonly networkConnectionInput: string;
```

- *Type:* string

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput"></a>

```typescript
public readonly networkExcludesInput: string[];
```

- *Type:* string[]

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput"></a>

```typescript
public readonly networkIncludesInput: string[];
```

- *Type:* string[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput"></a>

```typescript
public readonly usersExcludedInput: string[];
```

- *Type:* string[]

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll"></a>

```typescript
public readonly enroll: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleMfaAppExclude <a name="PolicyRuleMfaAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

const policyRuleMfaAppExclude: policyRuleMfa.PolicyRuleMfaAppExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaAppInclude <a name="PolicyRuleMfaAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

const policyRuleMfaAppInclude: policyRuleMfa.PolicyRuleMfaAppInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaConfig <a name="PolicyRuleMfaConfig" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

const policyRuleMfaConfig: policyRuleMfa.PolicyRuleMfaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name">name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude">appExclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>[]</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude">appInclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>[]</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll">enroll</a></code> | <code>string</code> | Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER? |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection">networkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId">policyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority">priority</a></code> | <code>number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status">status</a></code> | <code>string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude"></a>

```typescript
public readonly appExclude: IResolvable | PolicyRuleMfaAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>[]

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#app_exclude PolicyRuleMfa#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude"></a>

```typescript
public readonly appInclude: IResolvable | PolicyRuleMfaAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>[]

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#app_include PolicyRuleMfa#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll"></a>

```typescript
public readonly enroll: string;
```

- *Type:* string

Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#enroll PolicyRuleMfa#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#network_connection PolicyRuleMfa#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#network_excludes PolicyRuleMfa#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#network_includes PolicyRuleMfa#network_includes}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#policy_id PolicyRuleMfa#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#priority PolicyRuleMfa#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#status PolicyRuleMfa#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_mfa#users_excluded PolicyRuleMfa#users_excluded}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleMfaAppExcludeList <a name="PolicyRuleMfaAppExcludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

new policyRuleMfa.PolicyRuleMfaAppExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get"></a>

```typescript
public get(index: number): PolicyRuleMfaAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleMfaAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>[]

---


### PolicyRuleMfaAppExcludeOutputReference <a name="PolicyRuleMfaAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

new policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleMfaAppExclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>

---


### PolicyRuleMfaAppIncludeList <a name="PolicyRuleMfaAppIncludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

new policyRuleMfa.PolicyRuleMfaAppIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get"></a>

```typescript
public get(index: number): PolicyRuleMfaAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleMfaAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>[]

---


### PolicyRuleMfaAppIncludeOutputReference <a name="PolicyRuleMfaAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer"></a>

```typescript
import { policyRuleMfa } from '@cdktf/provider-okta'

new policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleMfaAppInclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>

---



