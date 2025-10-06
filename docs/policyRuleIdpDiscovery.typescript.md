# `policyRuleIdpDiscovery` Submodule <a name="`policyRuleIdpDiscovery` Submodule" id="@cdktf/provider-okta.policyRuleIdpDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleIdpDiscovery <a name="PolicyRuleIdpDiscovery" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery okta_policy_rule_idp_discovery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscovery(scope: Construct, id: string, config: PolicyRuleIdpDiscoveryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig">PolicyRuleIdpDiscoveryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig">PolicyRuleIdpDiscoveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude">putAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude">putAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putIdpProviders">putIdpProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude">putPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns">putUserIdentifierPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude">resetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude">resetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpProviders">resetIdpProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude">resetPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute">resetUserIdentifierAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns">resetUserIdentifierPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType">resetUserIdentifierType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppExclude` <a name="putAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude"></a>

```typescript
public putAppExclude(value: IResolvable | PolicyRuleIdpDiscoveryAppExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>[]

---

##### `putAppInclude` <a name="putAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude"></a>

```typescript
public putAppInclude(value: IResolvable | PolicyRuleIdpDiscoveryAppInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>[]

---

##### `putIdpProviders` <a name="putIdpProviders" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putIdpProviders"></a>

```typescript
public putIdpProviders(value: IResolvable | PolicyRuleIdpDiscoveryIdpProviders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putIdpProviders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>[]

---

##### `putPlatformInclude` <a name="putPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude"></a>

```typescript
public putPlatformInclude(value: IResolvable | PolicyRuleIdpDiscoveryPlatformInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>[]

---

##### `putUserIdentifierPatterns` <a name="putUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns"></a>

```typescript
public putUserIdentifierPatterns(value: IResolvable | PolicyRuleIdpDiscoveryUserIdentifierPatterns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>[]

---

##### `resetAppExclude` <a name="resetAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude"></a>

```typescript
public resetAppExclude(): void
```

##### `resetAppInclude` <a name="resetAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude"></a>

```typescript
public resetAppInclude(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpProviders` <a name="resetIdpProviders" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpProviders"></a>

```typescript
public resetIdpProviders(): void
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection"></a>

```typescript
public resetNetworkConnection(): void
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes"></a>

```typescript
public resetNetworkExcludes(): void
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes"></a>

```typescript
public resetNetworkIncludes(): void
```

##### `resetPlatformInclude` <a name="resetPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude"></a>

```typescript
public resetPlatformInclude(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUserIdentifierAttribute` <a name="resetUserIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute"></a>

```typescript
public resetUserIdentifierAttribute(): void
```

##### `resetUserIdentifierPatterns` <a name="resetUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns"></a>

```typescript
public resetUserIdentifierPatterns(): void
```

##### `resetUserIdentifierType` <a name="resetUserIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType"></a>

```typescript
public resetUserIdentifierType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyRuleIdpDiscovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyRuleIdpDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleIdpDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude">appExclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude">appInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpProviders">idpProviders</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList">PolicyRuleIdpDiscoveryIdpProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude">platformInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns">userIdentifierPatterns</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput">appExcludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput">appIncludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpProvidersInput">idpProvidersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput">networkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput">networkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput">networkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput">platformIncludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput">userIdentifierAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput">userIdentifierPatternsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput">userIdentifierTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection">networkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute">userIdentifierAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType">userIdentifierType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appExclude`<sup>Required</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude"></a>

```typescript
public readonly appExclude: PolicyRuleIdpDiscoveryAppExcludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a>

---

##### `appInclude`<sup>Required</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude"></a>

```typescript
public readonly appInclude: PolicyRuleIdpDiscoveryAppIncludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a>

---

##### `idpProviders`<sup>Required</sup> <a name="idpProviders" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpProviders"></a>

```typescript
public readonly idpProviders: PolicyRuleIdpDiscoveryIdpProvidersList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList">PolicyRuleIdpDiscoveryIdpProvidersList</a>

---

##### `platformInclude`<sup>Required</sup> <a name="platformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude"></a>

```typescript
public readonly platformInclude: PolicyRuleIdpDiscoveryPlatformIncludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a>

---

##### `userIdentifierPatterns`<sup>Required</sup> <a name="userIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns"></a>

```typescript
public readonly userIdentifierPatterns: PolicyRuleIdpDiscoveryUserIdentifierPatternsList;
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a>

---

##### `appExcludeInput`<sup>Optional</sup> <a name="appExcludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput"></a>

```typescript
public readonly appExcludeInput: IResolvable | PolicyRuleIdpDiscoveryAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>[]

---

##### `appIncludeInput`<sup>Optional</sup> <a name="appIncludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput"></a>

```typescript
public readonly appIncludeInput: IResolvable | PolicyRuleIdpDiscoveryAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpProvidersInput`<sup>Optional</sup> <a name="idpProvidersInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpProvidersInput"></a>

```typescript
public readonly idpProvidersInput: IResolvable | PolicyRuleIdpDiscoveryIdpProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput"></a>

```typescript
public readonly networkConnectionInput: string;
```

- *Type:* string

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput"></a>

```typescript
public readonly networkExcludesInput: string[];
```

- *Type:* string[]

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput"></a>

```typescript
public readonly networkIncludesInput: string[];
```

- *Type:* string[]

---

##### `platformIncludeInput`<sup>Optional</sup> <a name="platformIncludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput"></a>

```typescript
public readonly platformIncludeInput: IResolvable | PolicyRuleIdpDiscoveryPlatformInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `userIdentifierAttributeInput`<sup>Optional</sup> <a name="userIdentifierAttributeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput"></a>

```typescript
public readonly userIdentifierAttributeInput: string;
```

- *Type:* string

---

##### `userIdentifierPatternsInput`<sup>Optional</sup> <a name="userIdentifierPatternsInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput"></a>

```typescript
public readonly userIdentifierPatternsInput: IResolvable | PolicyRuleIdpDiscoveryUserIdentifierPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>[]

---

##### `userIdentifierTypeInput`<sup>Optional</sup> <a name="userIdentifierTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput"></a>

```typescript
public readonly userIdentifierTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `userIdentifierAttribute`<sup>Required</sup> <a name="userIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute"></a>

```typescript
public readonly userIdentifierAttribute: string;
```

- *Type:* string

---

##### `userIdentifierType`<sup>Required</sup> <a name="userIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType"></a>

```typescript
public readonly userIdentifierType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleIdpDiscoveryAppExclude <a name="PolicyRuleIdpDiscoveryAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

const policyRuleIdpDiscoveryAppExclude: policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryAppInclude <a name="PolicyRuleIdpDiscoveryAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

const policyRuleIdpDiscoveryAppInclude: policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryConfig <a name="PolicyRuleIdpDiscoveryConfig" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

const policyRuleIdpDiscoveryConfig: policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name">name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude">appExclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>[]</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude">appInclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>[]</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpProviders">idpProviders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>[]</code> | idp_providers block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection">networkConnection</a></code> | <code>string</code> | Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude">platformInclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>[]</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId">policyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority">priority</a></code> | <code>number</code> | Rule priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status">status</a></code> | <code>string</code> | Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute">userIdentifierAttribute</a></code> | <code>string</code> | Profile attribute matching can only have a single value that describes the type indicated in `user_identifier_type`. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns">userIdentifierPatterns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>[]</code> | user_identifier_patterns block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType">userIdentifierType</a></code> | <code>string</code> | One of: `IDENTIFIER`, `ATTRIBUTE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude"></a>

```typescript
public readonly appExclude: IResolvable | PolicyRuleIdpDiscoveryAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>[]

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude"></a>

```typescript
public readonly appInclude: IResolvable | PolicyRuleIdpDiscoveryAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>[]

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpProviders`<sup>Optional</sup> <a name="idpProviders" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpProviders"></a>

```typescript
public readonly idpProviders: IResolvable | PolicyRuleIdpDiscoveryIdpProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>[]

idp_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#idp_providers PolicyRuleIdpDiscovery#idp_providers}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

Required if `network_connection` = `ZONE`. Indicates the network zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}

---

##### `platformInclude`<sup>Optional</sup> <a name="platformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude"></a>

```typescript
public readonly platformInclude: IResolvable | PolicyRuleIdpDiscoveryPlatformInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>[]

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Rule priority.

This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}

---

##### `userIdentifierAttribute`<sup>Optional</sup> <a name="userIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute"></a>

```typescript
public readonly userIdentifierAttribute: string;
```

- *Type:* string

Profile attribute matching can only have a single value that describes the type indicated in `user_identifier_type`.

This is the attribute or identifier that the `user_identifier_patterns` are checked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}

---

##### `userIdentifierPatterns`<sup>Optional</sup> <a name="userIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns"></a>

```typescript
public readonly userIdentifierPatterns: IResolvable | PolicyRuleIdpDiscoveryUserIdentifierPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>[]

user_identifier_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}

---

##### `userIdentifierType`<sup>Optional</sup> <a name="userIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType"></a>

```typescript
public readonly userIdentifierType: string;
```

- *Type:* string

One of: `IDENTIFIER`, `ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}

---

### PolicyRuleIdpDiscoveryIdpProviders <a name="PolicyRuleIdpDiscoveryIdpProviders" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

const policyRuleIdpDiscoveryIdpProviders: policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders.property.id">id</a></code> | <code>string</code> | The identifier for the Idp the rule should route to if all conditions are met. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders.property.type">type</a></code> | <code>string</code> | Type of IdP. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The identifier for the Idp the rule should route to if all conditions are met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of IdP.

One of: `AMAZON`, `APPLE`, `DISCORD`, `FACEBOOK`, `GITHUB`, `GITLAB`, `GOOGLE`, `IDV_CLEAR`, `IDV_INCODE`, `IDV_PERSONA`, `LINKEDIN`, `LOGINGOV`, `LOGINGOV_SANDBOX`, `MICROSOFT`, `OIDC`, `PAYPAL`, `PAYPAL_SANDBOX`, `SALESFORCE`, `SAML2`, `SPOTIFY`, `X509`, `XERO`, `YAHOO`, `YAHOOJP`, Default: `OKTA`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}

---

### PolicyRuleIdpDiscoveryPlatformInclude <a name="PolicyRuleIdpDiscoveryPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

const policyRuleIdpDiscoveryPlatformInclude: policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression">osExpression</a></code> | <code>string</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |

---

##### `osExpression`<sup>Optional</sup> <a name="osExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression"></a>

```typescript
public readonly osExpression: string;
```

- *Type:* string

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#os_expression PolicyRuleIdpDiscovery#os_expression}

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

### PolicyRuleIdpDiscoveryUserIdentifierPatterns <a name="PolicyRuleIdpDiscoveryUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

const policyRuleIdpDiscoveryUserIdentifierPatterns: policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType">matchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}. |

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleIdpDiscoveryAppExcludeList <a name="PolicyRuleIdpDiscoveryAppExcludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get"></a>

```typescript
public get(index: number): PolicyRuleIdpDiscoveryAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryAppExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>[]

---


### PolicyRuleIdpDiscoveryAppExcludeOutputReference <a name="PolicyRuleIdpDiscoveryAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryAppExclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>

---


### PolicyRuleIdpDiscoveryAppIncludeList <a name="PolicyRuleIdpDiscoveryAppIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get"></a>

```typescript
public get(index: number): PolicyRuleIdpDiscoveryAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryAppInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>[]

---


### PolicyRuleIdpDiscoveryAppIncludeOutputReference <a name="PolicyRuleIdpDiscoveryAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryAppInclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>

---


### PolicyRuleIdpDiscoveryIdpProvidersList <a name="PolicyRuleIdpDiscoveryIdpProvidersList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.get"></a>

```typescript
public get(index: number): PolicyRuleIdpDiscoveryIdpProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryIdpProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>[]

---


### PolicyRuleIdpDiscoveryIdpProvidersOutputReference <a name="PolicyRuleIdpDiscoveryIdpProvidersOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryIdpProviders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryIdpProviders">PolicyRuleIdpDiscoveryIdpProviders</a>

---


### PolicyRuleIdpDiscoveryPlatformIncludeList <a name="PolicyRuleIdpDiscoveryPlatformIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get"></a>

```typescript
public get(index: number): PolicyRuleIdpDiscoveryPlatformIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryPlatformInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>[]

---


### PolicyRuleIdpDiscoveryPlatformIncludeOutputReference <a name="PolicyRuleIdpDiscoveryPlatformIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression">resetOsExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOsExpression` <a name="resetOsExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression"></a>

```typescript
public resetOsExpression(): void
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType"></a>

```typescript
public resetOsType(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput">osExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression">osExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osExpressionInput`<sup>Optional</sup> <a name="osExpressionInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput"></a>

```typescript
public readonly osExpressionInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `osExpression`<sup>Required</sup> <a name="osExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression"></a>

```typescript
public readonly osExpression: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryPlatformInclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsList <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get"></a>

```typescript
public get(index: number): PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryUserIdentifierPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>[]

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer"></a>

```typescript
import { policyRuleIdpDiscovery } from '@cdktf/provider-okta'

new policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchType` <a name="resetMatchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType"></a>

```typescript
public resetMatchType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput"></a>

```typescript
public readonly matchTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyRuleIdpDiscoveryUserIdentifierPatterns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>

---



