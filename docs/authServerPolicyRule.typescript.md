# `authServerPolicyRule` Submodule <a name="`authServerPolicyRule` Submodule" id="@cdktf/provider-okta.authServerPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerPolicyRule <a name="AuthServerPolicyRule" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule okta_auth_server_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer"></a>

```typescript
import { authServerPolicyRule } from '@cdktf/provider-okta'

new authServerPolicyRule.AuthServerPolicyRule(scope: Construct, id: string, config: AuthServerPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig">AuthServerPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig">AuthServerPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes">resetAccessTokenLifetimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist">resetGroupBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist">resetGroupWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId">resetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes">resetRefreshTokenLifetimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes">resetRefreshTokenWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist">resetScopeWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist">resetUserBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist">resetUserWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessTokenLifetimeMinutes` <a name="resetAccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes"></a>

```typescript
public resetAccessTokenLifetimeMinutes(): void
```

##### `resetGroupBlacklist` <a name="resetGroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist"></a>

```typescript
public resetGroupBlacklist(): void
```

##### `resetGroupWhitelist` <a name="resetGroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist"></a>

```typescript
public resetGroupWhitelist(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInlineHookId` <a name="resetInlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId"></a>

```typescript
public resetInlineHookId(): void
```

##### `resetRefreshTokenLifetimeMinutes` <a name="resetRefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes"></a>

```typescript
public resetRefreshTokenLifetimeMinutes(): void
```

##### `resetRefreshTokenWindowMinutes` <a name="resetRefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes"></a>

```typescript
public resetRefreshTokenWindowMinutes(): void
```

##### `resetScopeWhitelist` <a name="resetScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist"></a>

```typescript
public resetScopeWhitelist(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserBlacklist` <a name="resetUserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist"></a>

```typescript
public resetUserBlacklist(): void
```

##### `resetUserWhitelist` <a name="resetUserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist"></a>

```typescript
public resetUserWhitelist(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthServerPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct"></a>

```typescript
import { authServerPolicyRule } from '@cdktf/provider-okta'

authServerPolicyRule.AuthServerPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement"></a>

```typescript
import { authServerPolicyRule } from '@cdktf/provider-okta'

authServerPolicyRule.AuthServerPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource"></a>

```typescript
import { authServerPolicyRule } from '@cdktf/provider-okta'

authServerPolicyRule.AuthServerPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport"></a>

```typescript
import { authServerPolicyRule } from '@cdktf/provider-okta'

authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AuthServerPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthServerPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthServerPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute">systemAttribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput">accessTokenLifetimeMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput">authServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput">grantTypeWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput">groupBlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput">groupWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput">inlineHookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput">refreshTokenLifetimeMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput">refreshTokenWindowMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput">scopeWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput">userBlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput">userWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes">accessTokenLifetimeMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId">authServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist">grantTypeWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist">groupBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist">groupWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId">inlineHookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes">refreshTokenLifetimeMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes">refreshTokenWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist">scopeWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist">userBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist">userWhitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `accessTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="accessTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput"></a>

```typescript
public readonly accessTokenLifetimeMinutesInput: number;
```

- *Type:* number

---

##### `authServerIdInput`<sup>Optional</sup> <a name="authServerIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput"></a>

```typescript
public readonly authServerIdInput: string;
```

- *Type:* string

---

##### `grantTypeWhitelistInput`<sup>Optional</sup> <a name="grantTypeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput"></a>

```typescript
public readonly grantTypeWhitelistInput: string[];
```

- *Type:* string[]

---

##### `groupBlacklistInput`<sup>Optional</sup> <a name="groupBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput"></a>

```typescript
public readonly groupBlacklistInput: string[];
```

- *Type:* string[]

---

##### `groupWhitelistInput`<sup>Optional</sup> <a name="groupWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput"></a>

```typescript
public readonly groupWhitelistInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inlineHookIdInput`<sup>Optional</sup> <a name="inlineHookIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput"></a>

```typescript
public readonly inlineHookIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `refreshTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="refreshTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput"></a>

```typescript
public readonly refreshTokenLifetimeMinutesInput: number;
```

- *Type:* number

---

##### `refreshTokenWindowMinutesInput`<sup>Optional</sup> <a name="refreshTokenWindowMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput"></a>

```typescript
public readonly refreshTokenWindowMinutesInput: number;
```

- *Type:* number

---

##### `scopeWhitelistInput`<sup>Optional</sup> <a name="scopeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput"></a>

```typescript
public readonly scopeWhitelistInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userBlacklistInput`<sup>Optional</sup> <a name="userBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput"></a>

```typescript
public readonly userBlacklistInput: string[];
```

- *Type:* string[]

---

##### `userWhitelistInput`<sup>Optional</sup> <a name="userWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput"></a>

```typescript
public readonly userWhitelistInput: string[];
```

- *Type:* string[]

---

##### `accessTokenLifetimeMinutes`<sup>Required</sup> <a name="accessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes"></a>

```typescript
public readonly accessTokenLifetimeMinutes: number;
```

- *Type:* number

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId"></a>

```typescript
public readonly authServerId: string;
```

- *Type:* string

---

##### `grantTypeWhitelist`<sup>Required</sup> <a name="grantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist"></a>

```typescript
public readonly grantTypeWhitelist: string[];
```

- *Type:* string[]

---

##### `groupBlacklist`<sup>Required</sup> <a name="groupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist"></a>

```typescript
public readonly groupBlacklist: string[];
```

- *Type:* string[]

---

##### `groupWhitelist`<sup>Required</sup> <a name="groupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist"></a>

```typescript
public readonly groupWhitelist: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId"></a>

```typescript
public readonly inlineHookId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `refreshTokenLifetimeMinutes`<sup>Required</sup> <a name="refreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes"></a>

```typescript
public readonly refreshTokenLifetimeMinutes: number;
```

- *Type:* number

---

##### `refreshTokenWindowMinutes`<sup>Required</sup> <a name="refreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes"></a>

```typescript
public readonly refreshTokenWindowMinutes: number;
```

- *Type:* number

---

##### `scopeWhitelist`<sup>Required</sup> <a name="scopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist"></a>

```typescript
public readonly scopeWhitelist: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userBlacklist`<sup>Required</sup> <a name="userBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist"></a>

```typescript
public readonly userBlacklist: string[];
```

- *Type:* string[]

---

##### `userWhitelist`<sup>Required</sup> <a name="userWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist"></a>

```typescript
public readonly userWhitelist: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerPolicyRuleConfig <a name="AuthServerPolicyRuleConfig" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.Initializer"></a>

```typescript
import { authServerPolicyRule } from '@cdktf/provider-okta'

const authServerPolicyRuleConfig: authServerPolicyRule.AuthServerPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId">authServerId</a></code> | <code>string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist">grantTypeWhitelist</a></code> | <code>string[]</code> | Accepted grant type values, `authorization_code`, `implicit`, `password`, `client_credentials`, `urn:ietf:params:oauth:grant-type:saml2-bearer` (*Early Access Property*), `urn:ietf:params:oauth:grant-type:token-exchange` (*Early Access Property*),`urn:ietf:params:oauth:grant-type:device_code` (*Early Access Property*), `interaction_code` (*OIE only*). |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name">name</a></code> | <code>string</code> | Auth server policy rule name. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId">policyId</a></code> | <code>string</code> | Auth server policy ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | Priority of the auth server policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes">accessTokenLifetimeMinutes</a></code> | <code>number</code> | Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist">groupBlacklist</a></code> | <code>string[]</code> | Specifies a set of Groups whose Users are to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist">groupWhitelist</a></code> | <code>string[]</code> | Specifies a set of Groups whose Users are to be included. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId">inlineHookId</a></code> | <code>string</code> | The ID of the inline token to trigger. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes">refreshTokenLifetimeMinutes</a></code> | <code>number</code> | Lifetime of refresh token. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes">refreshTokenWindowMinutes</a></code> | <code>number</code> | Window in which a refresh token can be used. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist">scopeWhitelist</a></code> | <code>string[]</code> | Scopes allowed for this policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status">status</a></code> | <code>string</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type">type</a></code> | <code>string</code> | Auth server policy rule type, unlikely this will be anything other then the default. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist">userBlacklist</a></code> | <code>string[]</code> | Specifies a set of Users to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist">userWhitelist</a></code> | <code>string[]</code> | Specifies a set of Users to be included. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId"></a>

```typescript
public readonly authServerId: string;
```

- *Type:* string

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#auth_server_id AuthServerPolicyRule#auth_server_id}

---

##### `grantTypeWhitelist`<sup>Required</sup> <a name="grantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist"></a>

```typescript
public readonly grantTypeWhitelist: string[];
```

- *Type:* string[]

Accepted grant type values, `authorization_code`, `implicit`, `password`, `client_credentials`, `urn:ietf:params:oauth:grant-type:saml2-bearer` (*Early Access Property*), `urn:ietf:params:oauth:grant-type:token-exchange` (*Early Access Property*),`urn:ietf:params:oauth:grant-type:device_code` (*Early Access Property*), `interaction_code` (*OIE only*).

For `implicit` value either `user_whitelist` or `group_whitelist` should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Auth server policy rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#name AuthServerPolicyRule#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Auth server policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#policy_id AuthServerPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of the auth server policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#priority AuthServerPolicyRule#priority}

---

##### `accessTokenLifetimeMinutes`<sup>Optional</sup> <a name="accessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes"></a>

```typescript
public readonly accessTokenLifetimeMinutes: number;
```

- *Type:* number

Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}

---

##### `groupBlacklist`<sup>Optional</sup> <a name="groupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist"></a>

```typescript
public readonly groupBlacklist: string[];
```

- *Type:* string[]

Specifies a set of Groups whose Users are to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}

---

##### `groupWhitelist`<sup>Optional</sup> <a name="groupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist"></a>

```typescript
public readonly groupWhitelist: string[];
```

- *Type:* string[]

Specifies a set of Groups whose Users are to be included.

Can be set to Group ID or to the following: `EVERYONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId"></a>

```typescript
public readonly inlineHookId: string;
```

- *Type:* string

The ID of the inline token to trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}

---

##### `refreshTokenLifetimeMinutes`<sup>Optional</sup> <a name="refreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes"></a>

```typescript
public readonly refreshTokenLifetimeMinutes: number;
```

- *Type:* number

Lifetime of refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}

---

##### `refreshTokenWindowMinutes`<sup>Optional</sup> <a name="refreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes"></a>

```typescript
public readonly refreshTokenWindowMinutes: number;
```

- *Type:* number

Window in which a refresh token can be used.

It can be a value between 5 and 2628000 (5 years) minutes. Default is `10080` (7 days).`refresh_token_window_minutes` must be between `access_token_lifetime_minutes` and `refresh_token_lifetime_minutes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}

---

##### `scopeWhitelist`<sup>Optional</sup> <a name="scopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist"></a>

```typescript
public readonly scopeWhitelist: string[];
```

- *Type:* string[]

Scopes allowed for this policy rule.

They can be whitelisted by name or all can be whitelisted with ` * `

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Auth server policy rule type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#type AuthServerPolicyRule#type}

---

##### `userBlacklist`<sup>Optional</sup> <a name="userBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist"></a>

```typescript
public readonly userBlacklist: string[];
```

- *Type:* string[]

Specifies a set of Users to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}

---

##### `userWhitelist`<sup>Optional</sup> <a name="userWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist"></a>

```typescript
public readonly userWhitelist: string[];
```

- *Type:* string[]

Specifies a set of Users to be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}

---



