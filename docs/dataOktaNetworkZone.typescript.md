# `dataOktaNetworkZone` Submodule <a name="`dataOktaNetworkZone` Submodule" id="@cdktf/provider-okta.dataOktaNetworkZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaNetworkZone <a name="DataOktaNetworkZone" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/network_zone okta_network_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer"></a>

```typescript
import { dataOktaNetworkZone } from '@cdktf/provider-okta'

new dataOktaNetworkZone.DataOktaNetworkZone(scope: Construct, id: string, config?: DataOktaNetworkZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig">DataOktaNetworkZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig">DataOktaNetworkZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetDynamicLocationsExclude">resetDynamicLocationsExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesExclude">resetIpServiceCategoriesExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesInclude">resetIpServiceCategoriesInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDynamicLocationsExclude` <a name="resetDynamicLocationsExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetDynamicLocationsExclude"></a>

```typescript
public resetDynamicLocationsExclude(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpServiceCategoriesExclude` <a name="resetIpServiceCategoriesExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesExclude"></a>

```typescript
public resetIpServiceCategoriesExclude(): void
```

##### `resetIpServiceCategoriesInclude` <a name="resetIpServiceCategoriesInclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesInclude"></a>

```typescript
public resetIpServiceCategoriesInclude(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaNetworkZone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct"></a>

```typescript
import { dataOktaNetworkZone } from '@cdktf/provider-okta'

dataOktaNetworkZone.DataOktaNetworkZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement"></a>

```typescript
import { dataOktaNetworkZone } from '@cdktf/provider-okta'

dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource"></a>

```typescript
import { dataOktaNetworkZone } from '@cdktf/provider-okta'

dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport"></a>

```typescript
import { dataOktaNetworkZone } from '@cdktf/provider-okta'

dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaNetworkZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaNetworkZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaNetworkZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/network_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaNetworkZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.asns">asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocations">dynamicLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicProxyType">dynamicProxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.gateways">gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.proxies">proxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.usage">usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExcludeInput">dynamicLocationsExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExcludeInput">ipServiceCategoriesExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesIncludeInput">ipServiceCategoriesIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExclude">dynamicLocationsExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExclude">ipServiceCategoriesExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesInclude">ipServiceCategoriesInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.asns"></a>

```typescript
public readonly asns: string[];
```

- *Type:* string[]

---

##### `dynamicLocations`<sup>Required</sup> <a name="dynamicLocations" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocations"></a>

```typescript
public readonly dynamicLocations: string[];
```

- *Type:* string[]

---

##### `dynamicProxyType`<sup>Required</sup> <a name="dynamicProxyType" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicProxyType"></a>

```typescript
public readonly dynamicProxyType: string;
```

- *Type:* string

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.proxies"></a>

```typescript
public readonly proxies: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

##### `dynamicLocationsExcludeInput`<sup>Optional</sup> <a name="dynamicLocationsExcludeInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExcludeInput"></a>

```typescript
public readonly dynamicLocationsExcludeInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipServiceCategoriesExcludeInput`<sup>Optional</sup> <a name="ipServiceCategoriesExcludeInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExcludeInput"></a>

```typescript
public readonly ipServiceCategoriesExcludeInput: string[];
```

- *Type:* string[]

---

##### `ipServiceCategoriesIncludeInput`<sup>Optional</sup> <a name="ipServiceCategoriesIncludeInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesIncludeInput"></a>

```typescript
public readonly ipServiceCategoriesIncludeInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dynamicLocationsExclude`<sup>Required</sup> <a name="dynamicLocationsExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExclude"></a>

```typescript
public readonly dynamicLocationsExclude: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipServiceCategoriesExclude`<sup>Required</sup> <a name="ipServiceCategoriesExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExclude"></a>

```typescript
public readonly ipServiceCategoriesExclude: string[];
```

- *Type:* string[]

---

##### `ipServiceCategoriesInclude`<sup>Required</sup> <a name="ipServiceCategoriesInclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesInclude"></a>

```typescript
public readonly ipServiceCategoriesInclude: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaNetworkZoneConfig <a name="DataOktaNetworkZoneConfig" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.Initializer"></a>

```typescript
import { dataOktaNetworkZone } from '@cdktf/provider-okta'

const dataOktaNetworkZoneConfig: dataOktaNetworkZone.DataOktaNetworkZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dynamicLocationsExclude">dynamicLocationsExclude</a></code> | <code>string[]</code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.id">id</a></code> | <code>string</code> | ID of the network zone to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesExclude">ipServiceCategoriesExclude</a></code> | <code>string[]</code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesInclude">ipServiceCategoriesInclude</a></code> | <code>string[]</code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.name">name</a></code> | <code>string</code> | Name of the network zone to retrieve, conflicts with `id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dynamicLocationsExclude`<sup>Optional</sup> <a name="dynamicLocationsExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dynamicLocationsExclude"></a>

```typescript
public readonly dynamicLocationsExclude: string[];
```

- *Type:* string[]

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/network_zone#dynamic_locations_exclude DataOktaNetworkZone#dynamic_locations_exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the network zone to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/network_zone#id DataOktaNetworkZone#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipServiceCategoriesExclude`<sup>Optional</sup> <a name="ipServiceCategoriesExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesExclude"></a>

```typescript
public readonly ipServiceCategoriesExclude: string[];
```

- *Type:* string[]

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/network_zone#ip_service_categories_exclude DataOktaNetworkZone#ip_service_categories_exclude}

---

##### `ipServiceCategoriesInclude`<sup>Optional</sup> <a name="ipServiceCategoriesInclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesInclude"></a>

```typescript
public readonly ipServiceCategoriesInclude: string[];
```

- *Type:* string[]

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/network_zone#ip_service_categories_include DataOktaNetworkZone#ip_service_categories_include}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the network zone to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/network_zone#name DataOktaNetworkZone#name}

---



