# `networkZone` Submodule <a name="`networkZone` Submodule" id="@cdktf/provider-okta.networkZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkZone <a name="NetworkZone" id="@cdktf/provider-okta.networkZone.NetworkZone"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone okta_network_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer"></a>

```typescript
import { networkZone } from '@cdktf/provider-okta'

new networkZone.NetworkZone(scope: Construct, id: string, config: NetworkZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig">NetworkZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig">NetworkZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetAsns">resetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations">resetDynamicLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocationsExclude">resetDynamicLocationsExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType">resetDynamicProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesExclude">resetIpServiceCategoriesExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesInclude">resetIpServiceCategoriesInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetProxies">resetProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetUsage">resetUsage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.networkZone.NetworkZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.networkZone.NetworkZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.networkZone.NetworkZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.networkZone.NetworkZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.networkZone.NetworkZone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.networkZone.NetworkZone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.networkZone.NetworkZone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAsns` <a name="resetAsns" id="@cdktf/provider-okta.networkZone.NetworkZone.resetAsns"></a>

```typescript
public resetAsns(): void
```

##### `resetDynamicLocations` <a name="resetDynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations"></a>

```typescript
public resetDynamicLocations(): void
```

##### `resetDynamicLocationsExclude` <a name="resetDynamicLocationsExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocationsExclude"></a>

```typescript
public resetDynamicLocationsExclude(): void
```

##### `resetDynamicProxyType` <a name="resetDynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType"></a>

```typescript
public resetDynamicProxyType(): void
```

##### `resetGateways` <a name="resetGateways" id="@cdktf/provider-okta.networkZone.NetworkZone.resetGateways"></a>

```typescript
public resetGateways(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.networkZone.NetworkZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpServiceCategoriesExclude` <a name="resetIpServiceCategoriesExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesExclude"></a>

```typescript
public resetIpServiceCategoriesExclude(): void
```

##### `resetIpServiceCategoriesInclude` <a name="resetIpServiceCategoriesInclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesInclude"></a>

```typescript
public resetIpServiceCategoriesInclude(): void
```

##### `resetProxies` <a name="resetProxies" id="@cdktf/provider-okta.networkZone.NetworkZone.resetProxies"></a>

```typescript
public resetProxies(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.networkZone.NetworkZone.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-okta.networkZone.NetworkZone.resetUsage"></a>

```typescript
public resetUsage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct"></a>

```typescript
import { networkZone } from '@cdktf/provider-okta'

networkZone.NetworkZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement"></a>

```typescript
import { networkZone } from '@cdktf/provider-okta'

networkZone.NetworkZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource"></a>

```typescript
import { networkZone } from '@cdktf/provider-okta'

networkZone.NetworkZone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport"></a>

```typescript
import { networkZone } from '@cdktf/provider-okta'

networkZone.NetworkZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput">asnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExcludeInput">dynamicLocationsExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput">dynamicLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput">dynamicProxyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput">gatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExcludeInput">ipServiceCategoriesExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesIncludeInput">ipServiceCategoriesIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput">proxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput">usageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asns">asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations">dynamicLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExclude">dynamicLocationsExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType">dynamicProxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gateways">gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExclude">ipServiceCategoriesExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesInclude">ipServiceCategoriesInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxies">proxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usage">usage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.networkZone.NetworkZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.networkZone.NetworkZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.networkZone.NetworkZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `asnsInput`<sup>Optional</sup> <a name="asnsInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput"></a>

```typescript
public readonly asnsInput: string[];
```

- *Type:* string[]

---

##### `dynamicLocationsExcludeInput`<sup>Optional</sup> <a name="dynamicLocationsExcludeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExcludeInput"></a>

```typescript
public readonly dynamicLocationsExcludeInput: string[];
```

- *Type:* string[]

---

##### `dynamicLocationsInput`<sup>Optional</sup> <a name="dynamicLocationsInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput"></a>

```typescript
public readonly dynamicLocationsInput: string[];
```

- *Type:* string[]

---

##### `dynamicProxyTypeInput`<sup>Optional</sup> <a name="dynamicProxyTypeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput"></a>

```typescript
public readonly dynamicProxyTypeInput: string;
```

- *Type:* string

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput"></a>

```typescript
public readonly gatewaysInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipServiceCategoriesExcludeInput`<sup>Optional</sup> <a name="ipServiceCategoriesExcludeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExcludeInput"></a>

```typescript
public readonly ipServiceCategoriesExcludeInput: string[];
```

- *Type:* string[]

---

##### `ipServiceCategoriesIncludeInput`<sup>Optional</sup> <a name="ipServiceCategoriesIncludeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesIncludeInput"></a>

```typescript
public readonly ipServiceCategoriesIncludeInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `proxiesInput`<sup>Optional</sup> <a name="proxiesInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput"></a>

```typescript
public readonly proxiesInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput"></a>

```typescript
public readonly usageInput: string;
```

- *Type:* string

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asns"></a>

```typescript
public readonly asns: string[];
```

- *Type:* string[]

---

##### `dynamicLocations`<sup>Required</sup> <a name="dynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations"></a>

```typescript
public readonly dynamicLocations: string[];
```

- *Type:* string[]

---

##### `dynamicLocationsExclude`<sup>Required</sup> <a name="dynamicLocationsExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExclude"></a>

```typescript
public readonly dynamicLocationsExclude: string[];
```

- *Type:* string[]

---

##### `dynamicProxyType`<sup>Required</sup> <a name="dynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType"></a>

```typescript
public readonly dynamicProxyType: string;
```

- *Type:* string

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipServiceCategoriesExclude`<sup>Required</sup> <a name="ipServiceCategoriesExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExclude"></a>

```typescript
public readonly ipServiceCategoriesExclude: string[];
```

- *Type:* string[]

---

##### `ipServiceCategoriesInclude`<sup>Required</sup> <a name="ipServiceCategoriesInclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesInclude"></a>

```typescript
public readonly ipServiceCategoriesInclude: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxies"></a>

```typescript
public readonly proxies: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZone.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZone.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkZoneConfig <a name="NetworkZoneConfig" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.Initializer"></a>

```typescript
import { networkZone } from '@cdktf/provider-okta'

const networkZoneConfig: networkZone.NetworkZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name">name</a></code> | <code>string</code> | Name of the Network Zone Resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type">type</a></code> | <code>string</code> | Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns">asns</a></code> | <code>string[]</code> | List of asns included. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations">dynamicLocations</a></code> | <code>string[]</code> | Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocationsExclude">dynamicLocationsExclude</a></code> | <code>string[]</code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType">dynamicProxyType</a></code> | <code>string</code> | Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways">gateways</a></code> | <code>string[]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#id NetworkZone#id}. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesExclude">ipServiceCategoriesExclude</a></code> | <code>string[]</code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesInclude">ipServiceCategoriesInclude</a></code> | <code>string[]</code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies">proxies</a></code> | <code>string[]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status">status</a></code> | <code>string</code> | Network Status - can either be `ACTIVE` or `INACTIVE` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage">usage</a></code> | <code>string</code> | Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Network Zone Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#name NetworkZone#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#type NetworkZone#type}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns"></a>

```typescript
public readonly asns: string[];
```

- *Type:* string[]

List of asns included.

Format of each array value: a string representation of an ASN numeric value. Use with type `DYNAMIC` or `DYNAMIC_V2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#asns NetworkZone#asns}

---

##### `dynamicLocations`<sup>Optional</sup> <a name="dynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations"></a>

```typescript
public readonly dynamicLocations: string[];
```

- *Type:* string[]

Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}

---

##### `dynamicLocationsExclude`<sup>Optional</sup> <a name="dynamicLocationsExclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocationsExclude"></a>

```typescript
public readonly dynamicLocationsExclude: string[];
```

- *Type:* string[]

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_locations_exclude NetworkZone#dynamic_locations_exclude}

---

##### `dynamicProxyType`<sup>Optional</sup> <a name="dynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType"></a>

```typescript
public readonly dynamicProxyType: string;
```

- *Type:* string

Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`.

Use with type `DYNAMIC`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#gateways NetworkZone#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#id NetworkZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipServiceCategoriesExclude`<sup>Optional</sup> <a name="ipServiceCategoriesExclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesExclude"></a>

```typescript
public readonly ipServiceCategoriesExclude: string[];
```

- *Type:* string[]

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#ip_service_categories_exclude NetworkZone#ip_service_categories_exclude}

---

##### `ipServiceCategoriesInclude`<sup>Optional</sup> <a name="ipServiceCategoriesInclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesInclude"></a>

```typescript
public readonly ipServiceCategoriesInclude: string[];
```

- *Type:* string[]

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#ip_service_categories_include NetworkZone#ip_service_categories_include}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies"></a>

```typescript
public readonly proxies: string[];
```

- *Type:* string[]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#proxies NetworkZone#proxies}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Network Status - can either be `ACTIVE` or `INACTIVE` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#status NetworkZone#status}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#usage NetworkZone#usage}

---



