# `dataOktaDeviceAssurancePolicy` Submodule <a name="`dataOktaDeviceAssurancePolicy` Submodule" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaDeviceAssurancePolicy <a name="DataOktaDeviceAssurancePolicy" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy okta_device_assurance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy(scope: Construct, id: string, config?: DataOktaDeviceAssurancePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig">DataOktaDeviceAssurancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig">DataOktaDeviceAssurancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.putThirdPartySignalProvider">putThirdPartySignalProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetSecureHardwarePresent">resetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetThirdPartySignalProvider">resetThirdPartySignalProvider</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putThirdPartySignalProvider` <a name="putThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.putThirdPartySignalProvider"></a>

```typescript
public putThirdPartySignalProvider(value: DataOktaDeviceAssurancePolicyThirdPartySignalProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.putThirdPartySignalProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSecureHardwarePresent` <a name="resetSecureHardwarePresent" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetSecureHardwarePresent"></a>

```typescript
public resetSecureHardwarePresent(): void
```

##### `resetThirdPartySignalProvider` <a name="resetThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetThirdPartySignalProvider"></a>

```typescript
public resetThirdPartySignalProvider(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaDeviceAssurancePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isConstruct"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformElement"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformDataSource"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaDeviceAssurancePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaDeviceAssurancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaDeviceAssurancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaDeviceAssurancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.diskEncryptionType">diskEncryptionType</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference">DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.jailbreak">jailbreak</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersion">osVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference">DataOktaDeviceAssurancePolicyOsVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersionConstraint">osVersionConstraint</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList">DataOktaDeviceAssurancePolicyOsVersionConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.screenlockType">screenlockType</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference">DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProvider">thirdPartySignalProvider</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresentInput">secureHardwarePresentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProviderInput">thirdPartySignalProviderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `diskEncryptionType`<sup>Required</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.diskEncryptionType"></a>

```typescript
public readonly diskEncryptionType: DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference">DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference</a>

---

##### `jailbreak`<sup>Required</sup> <a name="jailbreak" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.jailbreak"></a>

```typescript
public readonly jailbreak: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersion"></a>

```typescript
public readonly osVersion: DataOktaDeviceAssurancePolicyOsVersionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference">DataOktaDeviceAssurancePolicyOsVersionOutputReference</a>

---

##### `osVersionConstraint`<sup>Required</sup> <a name="osVersionConstraint" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersionConstraint"></a>

```typescript
public readonly osVersionConstraint: DataOktaDeviceAssurancePolicyOsVersionConstraintList;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList">DataOktaDeviceAssurancePolicyOsVersionConstraintList</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `screenlockType`<sup>Required</sup> <a name="screenlockType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.screenlockType"></a>

```typescript
public readonly screenlockType: DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference">DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference</a>

---

##### `thirdPartySignalProvider`<sup>Required</sup> <a name="thirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProvider"></a>

```typescript
public readonly thirdPartySignalProvider: DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secureHardwarePresentInput`<sup>Optional</sup> <a name="secureHardwarePresentInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresentInput"></a>

```typescript
public readonly secureHardwarePresentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thirdPartySignalProviderInput`<sup>Optional</sup> <a name="thirdPartySignalProviderInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProviderInput"></a>

```typescript
public readonly thirdPartySignalProviderInput: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProvider;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secureHardwarePresent`<sup>Required</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaDeviceAssurancePolicyConfig <a name="DataOktaDeviceAssurancePolicyConfig" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyConfig: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.id">id</a></code> | <code>string</code> | ID of the user type to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.name">name</a></code> | <code>string</code> | Name of user type to retrieve, conflicts with `id`. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the device contains a secure hardware functionality. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.thirdPartySignalProvider">thirdPartySignalProvider</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a></code> | Indicates if the device contains a secure hardware functionality. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the user type to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#id DataOktaDeviceAssurancePolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of user type to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#name DataOktaDeviceAssurancePolicy#name}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the device contains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#secure_hardware_present DataOktaDeviceAssurancePolicy#secure_hardware_present}

---

##### `thirdPartySignalProvider`<sup>Optional</sup> <a name="thirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.thirdPartySignalProvider"></a>

```typescript
public readonly thirdPartySignalProvider: DataOktaDeviceAssurancePolicyThirdPartySignalProvider;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a>

Indicates if the device contains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#third_party_signal_provider DataOktaDeviceAssurancePolicy#third_party_signal_provider}

---

### DataOktaDeviceAssurancePolicyDiskEncryptionType <a name="DataOktaDeviceAssurancePolicyDiskEncryptionType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyDiskEncryptionType: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType = { ... }
```


### DataOktaDeviceAssurancePolicyOsVersion <a name="DataOktaDeviceAssurancePolicyOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyOsVersion: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion = { ... }
```


### DataOktaDeviceAssurancePolicyOsVersionConstraint <a name="DataOktaDeviceAssurancePolicyOsVersionConstraint" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyOsVersionConstraint: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint = { ... }
```


### DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement = { ... }
```


### DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement <a name="DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement = { ... }
```


### DataOktaDeviceAssurancePolicyScreenlockType <a name="DataOktaDeviceAssurancePolicyScreenlockType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyScreenlockType: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType = { ... }
```


### DataOktaDeviceAssurancePolicyThirdPartySignalProvider <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyThirdPartySignalProvider: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider.property.dtc">dtc</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#dtc DataOktaDeviceAssurancePolicy#dtc}. |

---

##### `dtc`<sup>Optional</sup> <a name="dtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider.property.dtc"></a>

```typescript
public readonly dtc: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#dtc DataOktaDeviceAssurancePolicy#dtc}.

---

### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.allowScreenLock">allowScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#allow_screen_lock DataOktaDeviceAssurancePolicy#allow_screen_lock}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.browserVersion">browserVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#browser_version DataOktaDeviceAssurancePolicy#browser_version}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.builtInDnsClientEnabled">builtInDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#built_in_dns_client_enabled DataOktaDeviceAssurancePolicy#built_in_dns_client_enabled}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.chromeRemoteDesktopAppBlocked">chromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#chrome_remote_desktop_app_blocked DataOktaDeviceAssurancePolicy#chrome_remote_desktop_app_blocked}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeAgentId">crowdStrikeAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#crowd_strike_agent_id DataOktaDeviceAssurancePolicy#crowd_strike_agent_id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeCustomerId">crowdStrikeCustomerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#crowd_strike_customer_id DataOktaDeviceAssurancePolicy#crowd_strike_customer_id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.deviceEnrollmentDomain">deviceEnrollmentDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#device_enrollment_domain DataOktaDeviceAssurancePolicy#device_enrollment_domain}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.diskEncrypted">diskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#disk_encrypted DataOktaDeviceAssurancePolicy#disk_encrypted}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.keyTrustLevel">keyTrustLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#key_trust_level DataOktaDeviceAssurancePolicy#key_trust_level}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.managedDevice">managedDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#managed_device DataOktaDeviceAssurancePolicy#managed_device}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osFirewall">osFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#os_firewall DataOktaDeviceAssurancePolicy#os_firewall}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osVersion">osVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#os_version DataOktaDeviceAssurancePolicy#os_version}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.passwordProtectionWarningTrigger">passwordProtectionWarningTrigger</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#password_protection_warning_trigger DataOktaDeviceAssurancePolicy#password_protection_warning_trigger}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.realtimeUrlCheckMode">realtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#realtime_url_check_mode DataOktaDeviceAssurancePolicy#realtime_url_check_mode}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.safeBrowsingProtectionLevel">safeBrowsingProtectionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#safe_browsing_protection_level DataOktaDeviceAssurancePolicy#safe_browsing_protection_level}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.screenLockSecured">screenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#screen_lock_secured DataOktaDeviceAssurancePolicy#screen_lock_secured}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.siteIsolationEnabled">siteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#site_isolation_enabled DataOktaDeviceAssurancePolicy#site_isolation_enabled}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.thirdPartyBlockingEnabled">thirdPartyBlockingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#third_party_blocking_enabled DataOktaDeviceAssurancePolicy#third_party_blocking_enabled}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsMachineDomain">windowsMachineDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#windows_machine_domain DataOktaDeviceAssurancePolicy#windows_machine_domain}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsUserDomain">windowsUserDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#windows_user_domain DataOktaDeviceAssurancePolicy#windows_user_domain}. |

---

##### `allowScreenLock`<sup>Optional</sup> <a name="allowScreenLock" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.allowScreenLock"></a>

```typescript
public readonly allowScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#allow_screen_lock DataOktaDeviceAssurancePolicy#allow_screen_lock}.

---

##### `browserVersion`<sup>Optional</sup> <a name="browserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.browserVersion"></a>

```typescript
public readonly browserVersion: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#browser_version DataOktaDeviceAssurancePolicy#browser_version}.

---

##### `builtInDnsClientEnabled`<sup>Optional</sup> <a name="builtInDnsClientEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.builtInDnsClientEnabled"></a>

```typescript
public readonly builtInDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#built_in_dns_client_enabled DataOktaDeviceAssurancePolicy#built_in_dns_client_enabled}.

---

##### `chromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="chromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.chromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly chromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#chrome_remote_desktop_app_blocked DataOktaDeviceAssurancePolicy#chrome_remote_desktop_app_blocked}.

---

##### `crowdStrikeAgentId`<sup>Optional</sup> <a name="crowdStrikeAgentId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeAgentId"></a>

```typescript
public readonly crowdStrikeAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#crowd_strike_agent_id DataOktaDeviceAssurancePolicy#crowd_strike_agent_id}.

---

##### `crowdStrikeCustomerId`<sup>Optional</sup> <a name="crowdStrikeCustomerId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeCustomerId"></a>

```typescript
public readonly crowdStrikeCustomerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#crowd_strike_customer_id DataOktaDeviceAssurancePolicy#crowd_strike_customer_id}.

---

##### `deviceEnrollmentDomain`<sup>Optional</sup> <a name="deviceEnrollmentDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.deviceEnrollmentDomain"></a>

```typescript
public readonly deviceEnrollmentDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#device_enrollment_domain DataOktaDeviceAssurancePolicy#device_enrollment_domain}.

---

##### `diskEncrypted`<sup>Optional</sup> <a name="diskEncrypted" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.diskEncrypted"></a>

```typescript
public readonly diskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#disk_encrypted DataOktaDeviceAssurancePolicy#disk_encrypted}.

---

##### `keyTrustLevel`<sup>Optional</sup> <a name="keyTrustLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.keyTrustLevel"></a>

```typescript
public readonly keyTrustLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#key_trust_level DataOktaDeviceAssurancePolicy#key_trust_level}.

---

##### `managedDevice`<sup>Optional</sup> <a name="managedDevice" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.managedDevice"></a>

```typescript
public readonly managedDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#managed_device DataOktaDeviceAssurancePolicy#managed_device}.

---

##### `osFirewall`<sup>Optional</sup> <a name="osFirewall" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osFirewall"></a>

```typescript
public readonly osFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#os_firewall DataOktaDeviceAssurancePolicy#os_firewall}.

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osVersion"></a>

```typescript
public readonly osVersion: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#os_version DataOktaDeviceAssurancePolicy#os_version}.

---

##### `passwordProtectionWarningTrigger`<sup>Optional</sup> <a name="passwordProtectionWarningTrigger" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.passwordProtectionWarningTrigger"></a>

```typescript
public readonly passwordProtectionWarningTrigger: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#password_protection_warning_trigger DataOktaDeviceAssurancePolicy#password_protection_warning_trigger}.

---

##### `realtimeUrlCheckMode`<sup>Optional</sup> <a name="realtimeUrlCheckMode" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.realtimeUrlCheckMode"></a>

```typescript
public readonly realtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#realtime_url_check_mode DataOktaDeviceAssurancePolicy#realtime_url_check_mode}.

---

##### `safeBrowsingProtectionLevel`<sup>Optional</sup> <a name="safeBrowsingProtectionLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.safeBrowsingProtectionLevel"></a>

```typescript
public readonly safeBrowsingProtectionLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#safe_browsing_protection_level DataOktaDeviceAssurancePolicy#safe_browsing_protection_level}.

---

##### `screenLockSecured`<sup>Optional</sup> <a name="screenLockSecured" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.screenLockSecured"></a>

```typescript
public readonly screenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#screen_lock_secured DataOktaDeviceAssurancePolicy#screen_lock_secured}.

---

##### `siteIsolationEnabled`<sup>Optional</sup> <a name="siteIsolationEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.siteIsolationEnabled"></a>

```typescript
public readonly siteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#site_isolation_enabled DataOktaDeviceAssurancePolicy#site_isolation_enabled}.

---

##### `thirdPartyBlockingEnabled`<sup>Optional</sup> <a name="thirdPartyBlockingEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.thirdPartyBlockingEnabled"></a>

```typescript
public readonly thirdPartyBlockingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#third_party_blocking_enabled DataOktaDeviceAssurancePolicy#third_party_blocking_enabled}.

---

##### `windowsMachineDomain`<sup>Optional</sup> <a name="windowsMachineDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsMachineDomain"></a>

```typescript
public readonly windowsMachineDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#windows_machine_domain DataOktaDeviceAssurancePolicy#windows_machine_domain}.

---

##### `windowsUserDomain`<sup>Optional</sup> <a name="windowsUserDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsUserDomain"></a>

```typescript
public readonly windowsUserDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#windows_user_domain DataOktaDeviceAssurancePolicy#windows_user_domain}.

---

### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion.property.minimum">minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}. |

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}.

---

### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

const dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion: dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion.property.minimum">minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}. |

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference <a name="DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType">DataOktaDeviceAssurancePolicyDiskEncryptionType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaDeviceAssurancePolicyDiskEncryptionType;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType">DataOktaDeviceAssurancePolicyDiskEncryptionType</a>

---


### DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor">distanceFromLatestMajor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.latestSecurityPatch">latestSecurityPatch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `distanceFromLatestMajor`<sup>Required</sup> <a name="distanceFromLatestMajor" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor"></a>

```typescript
public readonly distanceFromLatestMajor: number;
```

- *Type:* number

---

##### `latestSecurityPatch`<sup>Required</sup> <a name="latestSecurityPatch" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.latestSecurityPatch"></a>

```typescript
public readonly latestSecurityPatch: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement</a>

---


### DataOktaDeviceAssurancePolicyOsVersionConstraintList <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintList" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.get"></a>

```typescript
public get(index: number): DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.dynamicVersionRequirement">dynamicVersionRequirement</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.majorVersionConstraint">majorVersionConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint">DataOktaDeviceAssurancePolicyOsVersionConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicVersionRequirement`<sup>Required</sup> <a name="dynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.dynamicVersionRequirement"></a>

```typescript
public readonly dynamicVersionRequirement: DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference</a>

---

##### `majorVersionConstraint`<sup>Required</sup> <a name="majorVersionConstraint" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.majorVersionConstraint"></a>

```typescript
public readonly majorVersionConstraint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaDeviceAssurancePolicyOsVersionConstraint;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint">DataOktaDeviceAssurancePolicyOsVersionConstraint</a>

---


### DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor">distanceFromLatestMajor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.latestSecurityPatch">latestSecurityPatch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `distanceFromLatestMajor`<sup>Required</sup> <a name="distanceFromLatestMajor" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor"></a>

```typescript
public readonly distanceFromLatestMajor: number;
```

- *Type:* number

---

##### `latestSecurityPatch`<sup>Required</sup> <a name="latestSecurityPatch" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.latestSecurityPatch"></a>

```typescript
public readonly latestSecurityPatch: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement</a>

---


### DataOktaDeviceAssurancePolicyOsVersionOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.dynamicVersionRequirement">dynamicVersionRequirement</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion">DataOktaDeviceAssurancePolicyOsVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicVersionRequirement`<sup>Required</sup> <a name="dynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.dynamicVersionRequirement"></a>

```typescript
public readonly dynamicVersionRequirement: DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference</a>

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaDeviceAssurancePolicyOsVersion;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion">DataOktaDeviceAssurancePolicyOsVersion</a>

---


### DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference <a name="DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType">DataOktaDeviceAssurancePolicyScreenlockType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaDeviceAssurancePolicyScreenlockType;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType">DataOktaDeviceAssurancePolicyScreenlockType</a>

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimumInput">minimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a>

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimumInput">minimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a>

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putBrowserVersion">putBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putOsVersion">putOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetAllowScreenLock">resetAllowScreenLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBrowserVersion">resetBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBuiltInDnsClientEnabled">resetBuiltInDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetChromeRemoteDesktopAppBlocked">resetChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeAgentId">resetCrowdStrikeAgentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeCustomerId">resetCrowdStrikeCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDeviceEnrollmentDomain">resetDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDiskEncrypted">resetDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetKeyTrustLevel">resetKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetManagedDevice">resetManagedDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsFirewall">resetOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsVersion">resetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetPasswordProtectionWarningTrigger">resetPasswordProtectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetRealtimeUrlCheckMode">resetRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSafeBrowsingProtectionLevel">resetSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetScreenLockSecured">resetScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSiteIsolationEnabled">resetSiteIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetThirdPartyBlockingEnabled">resetThirdPartyBlockingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsMachineDomain">resetWindowsMachineDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsUserDomain">resetWindowsUserDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBrowserVersion` <a name="putBrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putBrowserVersion"></a>

```typescript
public putBrowserVersion(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putBrowserVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a>

---

##### `putOsVersion` <a name="putOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putOsVersion"></a>

```typescript
public putOsVersion(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putOsVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a>

---

##### `resetAllowScreenLock` <a name="resetAllowScreenLock" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetAllowScreenLock"></a>

```typescript
public resetAllowScreenLock(): void
```

##### `resetBrowserVersion` <a name="resetBrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBrowserVersion"></a>

```typescript
public resetBrowserVersion(): void
```

##### `resetBuiltInDnsClientEnabled` <a name="resetBuiltInDnsClientEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBuiltInDnsClientEnabled"></a>

```typescript
public resetBuiltInDnsClientEnabled(): void
```

##### `resetChromeRemoteDesktopAppBlocked` <a name="resetChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetChromeRemoteDesktopAppBlocked"></a>

```typescript
public resetChromeRemoteDesktopAppBlocked(): void
```

##### `resetCrowdStrikeAgentId` <a name="resetCrowdStrikeAgentId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeAgentId"></a>

```typescript
public resetCrowdStrikeAgentId(): void
```

##### `resetCrowdStrikeCustomerId` <a name="resetCrowdStrikeCustomerId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeCustomerId"></a>

```typescript
public resetCrowdStrikeCustomerId(): void
```

##### `resetDeviceEnrollmentDomain` <a name="resetDeviceEnrollmentDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDeviceEnrollmentDomain"></a>

```typescript
public resetDeviceEnrollmentDomain(): void
```

##### `resetDiskEncrypted` <a name="resetDiskEncrypted" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDiskEncrypted"></a>

```typescript
public resetDiskEncrypted(): void
```

##### `resetKeyTrustLevel` <a name="resetKeyTrustLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetKeyTrustLevel"></a>

```typescript
public resetKeyTrustLevel(): void
```

##### `resetManagedDevice` <a name="resetManagedDevice" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetManagedDevice"></a>

```typescript
public resetManagedDevice(): void
```

##### `resetOsFirewall` <a name="resetOsFirewall" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsFirewall"></a>

```typescript
public resetOsFirewall(): void
```

##### `resetOsVersion` <a name="resetOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsVersion"></a>

```typescript
public resetOsVersion(): void
```

##### `resetPasswordProtectionWarningTrigger` <a name="resetPasswordProtectionWarningTrigger" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetPasswordProtectionWarningTrigger"></a>

```typescript
public resetPasswordProtectionWarningTrigger(): void
```

##### `resetRealtimeUrlCheckMode` <a name="resetRealtimeUrlCheckMode" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetRealtimeUrlCheckMode"></a>

```typescript
public resetRealtimeUrlCheckMode(): void
```

##### `resetSafeBrowsingProtectionLevel` <a name="resetSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSafeBrowsingProtectionLevel"></a>

```typescript
public resetSafeBrowsingProtectionLevel(): void
```

##### `resetScreenLockSecured` <a name="resetScreenLockSecured" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetScreenLockSecured"></a>

```typescript
public resetScreenLockSecured(): void
```

##### `resetSiteIsolationEnabled` <a name="resetSiteIsolationEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSiteIsolationEnabled"></a>

```typescript
public resetSiteIsolationEnabled(): void
```

##### `resetThirdPartyBlockingEnabled` <a name="resetThirdPartyBlockingEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetThirdPartyBlockingEnabled"></a>

```typescript
public resetThirdPartyBlockingEnabled(): void
```

##### `resetWindowsMachineDomain` <a name="resetWindowsMachineDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsMachineDomain"></a>

```typescript
public resetWindowsMachineDomain(): void
```

##### `resetWindowsUserDomain` <a name="resetWindowsUserDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsUserDomain"></a>

```typescript
public resetWindowsUserDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersion">browserVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersion">osVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLockInput">allowScreenLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersionInput">browserVersionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabledInput">builtInDnsClientEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlockedInput">chromeRemoteDesktopAppBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentIdInput">crowdStrikeAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerIdInput">crowdStrikeCustomerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomainInput">deviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncryptedInput">diskEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevelInput">keyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDeviceInput">managedDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewallInput">osFirewallInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersionInput">osVersionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTriggerInput">passwordProtectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckModeInput">realtimeUrlCheckModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevelInput">safeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecuredInput">screenLockSecuredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabledInput">siteIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabledInput">thirdPartyBlockingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomainInput">windowsMachineDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomainInput">windowsUserDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLock">allowScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabled">builtInDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlocked">chromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentId">crowdStrikeAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerId">crowdStrikeCustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomain">deviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncrypted">diskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevel">keyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDevice">managedDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewall">osFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTrigger">passwordProtectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckMode">realtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevel">safeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecured">screenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabled">siteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabled">thirdPartyBlockingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomain">windowsMachineDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomain">windowsUserDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `browserVersion`<sup>Required</sup> <a name="browserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersion"></a>

```typescript
public readonly browserVersion: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference</a>

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersion"></a>

```typescript
public readonly osVersion: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference</a>

---

##### `allowScreenLockInput`<sup>Optional</sup> <a name="allowScreenLockInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLockInput"></a>

```typescript
public readonly allowScreenLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `browserVersionInput`<sup>Optional</sup> <a name="browserVersionInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersionInput"></a>

```typescript
public readonly browserVersionInput: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a>

---

##### `builtInDnsClientEnabledInput`<sup>Optional</sup> <a name="builtInDnsClientEnabledInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabledInput"></a>

```typescript
public readonly builtInDnsClientEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `chromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="chromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlockedInput"></a>

```typescript
public readonly chromeRemoteDesktopAppBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crowdStrikeAgentIdInput`<sup>Optional</sup> <a name="crowdStrikeAgentIdInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentIdInput"></a>

```typescript
public readonly crowdStrikeAgentIdInput: string;
```

- *Type:* string

---

##### `crowdStrikeCustomerIdInput`<sup>Optional</sup> <a name="crowdStrikeCustomerIdInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerIdInput"></a>

```typescript
public readonly crowdStrikeCustomerIdInput: string;
```

- *Type:* string

---

##### `deviceEnrollmentDomainInput`<sup>Optional</sup> <a name="deviceEnrollmentDomainInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomainInput"></a>

```typescript
public readonly deviceEnrollmentDomainInput: string;
```

- *Type:* string

---

##### `diskEncryptedInput`<sup>Optional</sup> <a name="diskEncryptedInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncryptedInput"></a>

```typescript
public readonly diskEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyTrustLevelInput`<sup>Optional</sup> <a name="keyTrustLevelInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevelInput"></a>

```typescript
public readonly keyTrustLevelInput: string;
```

- *Type:* string

---

##### `managedDeviceInput`<sup>Optional</sup> <a name="managedDeviceInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDeviceInput"></a>

```typescript
public readonly managedDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `osFirewallInput`<sup>Optional</sup> <a name="osFirewallInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewallInput"></a>

```typescript
public readonly osFirewallInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersionInput"></a>

```typescript
public readonly osVersionInput: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a>

---

##### `passwordProtectionWarningTriggerInput`<sup>Optional</sup> <a name="passwordProtectionWarningTriggerInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTriggerInput"></a>

```typescript
public readonly passwordProtectionWarningTriggerInput: string;
```

- *Type:* string

---

##### `realtimeUrlCheckModeInput`<sup>Optional</sup> <a name="realtimeUrlCheckModeInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckModeInput"></a>

```typescript
public readonly realtimeUrlCheckModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `safeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="safeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevelInput"></a>

```typescript
public readonly safeBrowsingProtectionLevelInput: string;
```

- *Type:* string

---

##### `screenLockSecuredInput`<sup>Optional</sup> <a name="screenLockSecuredInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecuredInput"></a>

```typescript
public readonly screenLockSecuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `siteIsolationEnabledInput`<sup>Optional</sup> <a name="siteIsolationEnabledInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabledInput"></a>

```typescript
public readonly siteIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thirdPartyBlockingEnabledInput`<sup>Optional</sup> <a name="thirdPartyBlockingEnabledInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabledInput"></a>

```typescript
public readonly thirdPartyBlockingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsMachineDomainInput`<sup>Optional</sup> <a name="windowsMachineDomainInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomainInput"></a>

```typescript
public readonly windowsMachineDomainInput: string;
```

- *Type:* string

---

##### `windowsUserDomainInput`<sup>Optional</sup> <a name="windowsUserDomainInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomainInput"></a>

```typescript
public readonly windowsUserDomainInput: string;
```

- *Type:* string

---

##### `allowScreenLock`<sup>Required</sup> <a name="allowScreenLock" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLock"></a>

```typescript
public readonly allowScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `builtInDnsClientEnabled`<sup>Required</sup> <a name="builtInDnsClientEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabled"></a>

```typescript
public readonly builtInDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `chromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="chromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly chromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crowdStrikeAgentId`<sup>Required</sup> <a name="crowdStrikeAgentId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentId"></a>

```typescript
public readonly crowdStrikeAgentId: string;
```

- *Type:* string

---

##### `crowdStrikeCustomerId`<sup>Required</sup> <a name="crowdStrikeCustomerId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerId"></a>

```typescript
public readonly crowdStrikeCustomerId: string;
```

- *Type:* string

---

##### `deviceEnrollmentDomain`<sup>Required</sup> <a name="deviceEnrollmentDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomain"></a>

```typescript
public readonly deviceEnrollmentDomain: string;
```

- *Type:* string

---

##### `diskEncrypted`<sup>Required</sup> <a name="diskEncrypted" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncrypted"></a>

```typescript
public readonly diskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyTrustLevel`<sup>Required</sup> <a name="keyTrustLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevel"></a>

```typescript
public readonly keyTrustLevel: string;
```

- *Type:* string

---

##### `managedDevice`<sup>Required</sup> <a name="managedDevice" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDevice"></a>

```typescript
public readonly managedDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `osFirewall`<sup>Required</sup> <a name="osFirewall" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewall"></a>

```typescript
public readonly osFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordProtectionWarningTrigger`<sup>Required</sup> <a name="passwordProtectionWarningTrigger" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTrigger"></a>

```typescript
public readonly passwordProtectionWarningTrigger: string;
```

- *Type:* string

---

##### `realtimeUrlCheckMode`<sup>Required</sup> <a name="realtimeUrlCheckMode" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckMode"></a>

```typescript
public readonly realtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `safeBrowsingProtectionLevel`<sup>Required</sup> <a name="safeBrowsingProtectionLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevel"></a>

```typescript
public readonly safeBrowsingProtectionLevel: string;
```

- *Type:* string

---

##### `screenLockSecured`<sup>Required</sup> <a name="screenLockSecured" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecured"></a>

```typescript
public readonly screenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `siteIsolationEnabled`<sup>Required</sup> <a name="siteIsolationEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabled"></a>

```typescript
public readonly siteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thirdPartyBlockingEnabled`<sup>Required</sup> <a name="thirdPartyBlockingEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabled"></a>

```typescript
public readonly thirdPartyBlockingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsMachineDomain`<sup>Required</sup> <a name="windowsMachineDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomain"></a>

```typescript
public readonly windowsMachineDomain: string;
```

- *Type:* string

---

##### `windowsUserDomain`<sup>Required</sup> <a name="windowsUserDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomain"></a>

```typescript
public readonly windowsUserDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a>

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer"></a>

```typescript
import { dataOktaDeviceAssurancePolicy } from '@cdktf/provider-okta'

new dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.putDtc">putDtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resetDtc">resetDtc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDtc` <a name="putDtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.putDtc"></a>

```typescript
public putDtc(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.putDtc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a>

---

##### `resetDtc` <a name="resetDtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resetDtc"></a>

```typescript
public resetDtc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtc">dtc</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtcInput">dtcInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dtc`<sup>Required</sup> <a name="dtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtc"></a>

```typescript
public readonly dtc: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference</a>

---

##### `dtcInput`<sup>Optional</sup> <a name="dtcInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtcInput"></a>

```typescript
public readonly dtcInput: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaDeviceAssurancePolicyThirdPartySignalProvider;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a>

---



