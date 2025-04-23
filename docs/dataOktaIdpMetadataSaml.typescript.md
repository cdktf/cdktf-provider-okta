# `dataOktaIdpMetadataSaml` Submodule <a name="`dataOktaIdpMetadataSaml` Submodule" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpMetadataSaml <a name="DataOktaIdpMetadataSaml" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/idp_metadata_saml okta_idp_metadata_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer"></a>

```typescript
import { dataOktaIdpMetadataSaml } from '@cdktf/provider-okta'

new dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml(scope: Construct, id: string, config?: DataOktaIdpMetadataSamlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig">DataOktaIdpMetadataSamlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig">DataOktaIdpMetadataSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetIdpId">resetIdpId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpId` <a name="resetIdpId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetIdpId"></a>

```typescript
public resetIdpId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaIdpMetadataSaml resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct"></a>

```typescript
import { dataOktaIdpMetadataSaml } from '@cdktf/provider-okta'

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement"></a>

```typescript
import { dataOktaIdpMetadataSaml } from '@cdktf/provider-okta'

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource"></a>

```typescript
import { dataOktaIdpMetadataSaml } from '@cdktf/provider-okta'

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport"></a>

```typescript
import { dataOktaIdpMetadataSaml } from '@cdktf/provider-okta'

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaIdpMetadataSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaIdpMetadataSaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaIdpMetadataSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/idp_metadata_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaIdpMetadataSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.assertionsSigned">assertionsSigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.authnRequestSigned">authnRequestSigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.encryptionCertificate">encryptionCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpPostBinding">httpPostBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpRedirectBinding">httpRedirectBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.signingCertificate">signingCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpIdInput">idpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpId">idpId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `assertionsSigned`<sup>Required</sup> <a name="assertionsSigned" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.assertionsSigned"></a>

```typescript
public readonly assertionsSigned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `authnRequestSigned`<sup>Required</sup> <a name="authnRequestSigned" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.authnRequestSigned"></a>

```typescript
public readonly authnRequestSigned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `encryptionCertificate`<sup>Required</sup> <a name="encryptionCertificate" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.encryptionCertificate"></a>

```typescript
public readonly encryptionCertificate: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `httpPostBinding`<sup>Required</sup> <a name="httpPostBinding" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpPostBinding"></a>

```typescript
public readonly httpPostBinding: string;
```

- *Type:* string

---

##### `httpRedirectBinding`<sup>Required</sup> <a name="httpRedirectBinding" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpRedirectBinding"></a>

```typescript
public readonly httpRedirectBinding: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `signingCertificate`<sup>Required</sup> <a name="signingCertificate" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.signingCertificate"></a>

```typescript
public readonly signingCertificate: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpIdInput`<sup>Optional</sup> <a name="idpIdInput" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpIdInput"></a>

```typescript
public readonly idpIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpId"></a>

```typescript
public readonly idpId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpMetadataSamlConfig <a name="DataOktaIdpMetadataSamlConfig" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.Initializer"></a>

```typescript
import { dataOktaIdpMetadataSaml } from '@cdktf/provider-okta'

const dataOktaIdpMetadataSamlConfig: dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.idpId">idpId</a></code> | <code>string</code> | The id of the IdP to retrieve metadata for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpId`<sup>Optional</sup> <a name="idpId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.idpId"></a>

```typescript
public readonly idpId: string;
```

- *Type:* string

The id of the IdP to retrieve metadata for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}

---



