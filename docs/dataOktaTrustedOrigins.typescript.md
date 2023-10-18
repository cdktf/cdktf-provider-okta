# `data_okta_trusted_origins`

Refer to the Terraform Registory for docs: [`data_okta_trusted_origins`](https://registry.terraform.io/providers/okta/okta/4.5.0/docs/data-sources/trusted_origins).

# `dataOktaTrustedOrigins` Submodule <a name="`dataOktaTrustedOrigins` Submodule" id="@cdktf/provider-okta.dataOktaTrustedOrigins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaTrustedOrigins <a name="DataOktaTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/data-sources/trusted_origins okta_trusted_origins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

new dataOktaTrustedOrigins.DataOktaTrustedOrigins(scope: Construct, id: string, config?: DataOktaTrustedOriginsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig">DataOktaTrustedOriginsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig">DataOktaTrustedOriginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaTrustedOrigins resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaTrustedOrigins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaTrustedOrigins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaTrustedOrigins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/data-sources/trusted_origins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaTrustedOrigins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins">trustedOrigins</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `trustedOrigins`<sup>Required</sup> <a name="trustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins"></a>

```typescript
public readonly trustedOrigins: DataOktaTrustedOriginsTrustedOriginsList;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaTrustedOriginsConfig <a name="DataOktaTrustedOriginsConfig" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.Initializer"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

const dataOktaTrustedOriginsConfig: dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter">filter</a></code> | <code>string</code> | Filter criteria. Filter value will be URL-encoded by the provider. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter criteria. Filter value will be URL-encoded by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/data-sources/trusted_origins#filter DataOktaTrustedOrigins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaTrustedOriginsTrustedOrigins <a name="DataOktaTrustedOriginsTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins.Initializer"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

const dataOktaTrustedOriginsTrustedOrigins: dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaTrustedOriginsTrustedOriginsList <a name="DataOktaTrustedOriginsTrustedOriginsList" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

new dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get"></a>

```typescript
public get(index: number): DataOktaTrustedOriginsTrustedOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOktaTrustedOriginsTrustedOriginsOutputReference <a name="DataOktaTrustedOriginsTrustedOriginsOutputReference" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer"></a>

```typescript
import { dataOktaTrustedOrigins } from '@cdktf/provider-okta'

new dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaTrustedOriginsTrustedOrigins;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a>

---



