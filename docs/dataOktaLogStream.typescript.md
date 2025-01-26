# `dataOktaLogStream` Submodule <a name="`dataOktaLogStream` Submodule" id="@cdktf/provider-okta.dataOktaLogStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaLogStream <a name="DataOktaLogStream" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/log_stream okta_log_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.Initializer"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

new dataOktaLogStream.DataOktaLogStream(scope: Construct, id: string, config: DataOktaLogStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig">DataOktaLogStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig">DataOktaLogStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaLogStream resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isConstruct"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

dataOktaLogStream.DataOktaLogStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isTerraformElement"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

dataOktaLogStream.DataOktaLogStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isTerraformDataSource"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

dataOktaLogStream.DataOktaLogStream.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.generateConfigForImport"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

dataOktaLogStream.DataOktaLogStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaLogStream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaLogStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaLogStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/log_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaLogStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference">DataOktaLogStreamSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.settings"></a>

```typescript
public readonly settings: DataOktaLogStreamSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference">DataOktaLogStreamSettingsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaLogStreamConfig <a name="DataOktaLogStreamConfig" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.Initializer"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

const dataOktaLogStreamConfig: dataOktaLogStream.DataOktaLogStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.id">id</a></code> | <code>string</code> | ID of the log stream to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.name">name</a></code> | <code>string</code> | Unique name for the Log Stream object, conflicts with `id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the log stream to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/log_stream#id DataOktaLogStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the Log Stream object, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/log_stream#name DataOktaLogStream#name}

---

### DataOktaLogStreamSettings <a name="DataOktaLogStreamSettings" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettings.Initializer"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

const dataOktaLogStreamSettings: dataOktaLogStream.DataOktaLogStreamSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaLogStreamSettingsOutputReference <a name="DataOktaLogStreamSettingsOutputReference" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.Initializer"></a>

```typescript
import { dataOktaLogStream } from '@cdktf/provider-okta'

new dataOktaLogStream.DataOktaLogStreamSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.eventSourceName">eventSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettings">DataOktaLogStreamSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `eventSourceName`<sup>Required</sup> <a name="eventSourceName" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.eventSourceName"></a>

```typescript
public readonly eventSourceName: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaLogStreamSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaLogStream.DataOktaLogStreamSettings">DataOktaLogStreamSettings</a>

---



