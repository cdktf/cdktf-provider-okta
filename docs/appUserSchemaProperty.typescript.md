# `appUserSchemaProperty` Submodule <a name="`appUserSchemaProperty` Submodule" id="@cdktf/provider-okta.appUserSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchemaProperty <a name="AppUserSchemaProperty" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property okta_app_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

new appUserSchemaProperty.AppUserSchemaProperty(scope: Construct, id: string, config: AppUserSchemaPropertyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig">AppUserSchemaPropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig">AppUserSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf">putArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf">putOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum">resetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf">resetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType">resetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace">resetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf">resetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion">resetUnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique">resetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putArrayOneOf` <a name="putArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf"></a>

```typescript
public putArrayOneOf(value: IResolvable | AppUserSchemaPropertyArrayOneOf[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>[]

---

##### `putOneOf` <a name="putOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf"></a>

```typescript
public putOneOf(value: IResolvable | AppUserSchemaPropertyOneOf[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>[]

---

##### `resetArrayEnum` <a name="resetArrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum"></a>

```typescript
public resetArrayEnum(): void
```

##### `resetArrayOneOf` <a name="resetArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf"></a>

```typescript
public resetArrayOneOf(): void
```

##### `resetArrayType` <a name="resetArrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType"></a>

```typescript
public resetArrayType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName"></a>

```typescript
public resetExternalName(): void
```

##### `resetExternalNamespace` <a name="resetExternalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace"></a>

```typescript
public resetExternalNamespace(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster"></a>

```typescript
public resetMaster(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength"></a>

```typescript
public resetMinLength(): void
```

##### `resetOneOf` <a name="resetOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf"></a>

```typescript
public resetOneOf(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetUnion` <a name="resetUnion" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion"></a>

```typescript
public resetUnion(): void
```

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique"></a>

```typescript
public resetUnique(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

appUserSchemaProperty.AppUserSchemaProperty.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf">arrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf">oneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput">arrayEnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput">arrayOneOfInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput">arrayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput">enumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput">externalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput">externalNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput">masterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput">oneOfInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput">unionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput">uniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum">arrayEnum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType">arrayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum">enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName">externalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace">externalNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master">master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union">union</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique">unique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arrayOneOf`<sup>Required</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf"></a>

```typescript
public readonly arrayOneOf: AppUserSchemaPropertyArrayOneOfList;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a>

---

##### `oneOf`<sup>Required</sup> <a name="oneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf"></a>

```typescript
public readonly oneOf: AppUserSchemaPropertyOneOfList;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `arrayEnumInput`<sup>Optional</sup> <a name="arrayEnumInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput"></a>

```typescript
public readonly arrayEnumInput: string[];
```

- *Type:* string[]

---

##### `arrayOneOfInput`<sup>Optional</sup> <a name="arrayOneOfInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput"></a>

```typescript
public readonly arrayOneOfInput: IResolvable | AppUserSchemaPropertyArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>[]

---

##### `arrayTypeInput`<sup>Optional</sup> <a name="arrayTypeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput"></a>

```typescript
public readonly arrayTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput"></a>

```typescript
public readonly enumInput: string[];
```

- *Type:* string[]

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput"></a>

```typescript
public readonly externalNameInput: string;
```

- *Type:* string

---

##### `externalNamespaceInput`<sup>Optional</sup> <a name="externalNamespaceInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput"></a>

```typescript
public readonly externalNamespaceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput"></a>

```typescript
public readonly masterInput: string;
```

- *Type:* string

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `oneOfInput`<sup>Optional</sup> <a name="oneOfInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput"></a>

```typescript
public readonly oneOfInput: IResolvable | AppUserSchemaPropertyOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unionInput`<sup>Optional</sup> <a name="unionInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput"></a>

```typescript
public readonly unionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput"></a>

```typescript
public readonly uniqueInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `arrayEnum`<sup>Required</sup> <a name="arrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum"></a>

```typescript
public readonly arrayEnum: string[];
```

- *Type:* string[]

---

##### `arrayType`<sup>Required</sup> <a name="arrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType"></a>

```typescript
public readonly arrayType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

---

##### `externalNamespace`<sup>Required</sup> <a name="externalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace"></a>

```typescript
public readonly externalNamespace: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `union`<sup>Required</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union"></a>

```typescript
public readonly union: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique"></a>

```typescript
public readonly unique: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaPropertyArrayOneOf <a name="AppUserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

const appUserSchemaPropertyArrayOneOf: appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const">const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title">title</a></code> | <code>string</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#title AppUserSchemaProperty#title}

---

### AppUserSchemaPropertyConfig <a name="AppUserSchemaPropertyConfig" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

const appUserSchemaPropertyConfig: appUserSchemaProperty.AppUserSchemaPropertyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#app_id AppUserSchemaProperty#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index">index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title">title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type">type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum">arrayEnum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf">arrayOneOf</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>[]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType">arrayType</a></code> | <code>string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description">description</a></code> | <code>string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum">enum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName">externalName</a></code> | <code>string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace">externalNamespace</a></code> | <code>string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#id AppUserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master">master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength">maxLength</a></code> | <code>number</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength">minLength</a></code> | <code>number</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf">oneOf</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>[]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#scope AppUserSchemaProperty#scope}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union">union</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows to assign attribute's group priority. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique">unique</a></code> | <code>string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType">userType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#app_id AppUserSchemaProperty#app_id}.

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#index AppUserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#title AppUserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#type AppUserSchemaProperty#type}

---

##### `arrayEnum`<sup>Optional</sup> <a name="arrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum"></a>

```typescript
public readonly arrayEnum: string[];
```

- *Type:* string[]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#array_enum AppUserSchemaProperty#array_enum}

---

##### `arrayOneOf`<sup>Optional</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf"></a>

```typescript
public readonly arrayOneOf: IResolvable | AppUserSchemaPropertyArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>[]

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#array_one_of AppUserSchemaProperty#array_one_of}

---

##### `arrayType`<sup>Optional</sup> <a name="arrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType"></a>

```typescript
public readonly arrayType: string;
```

- *Type:* string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#array_type AppUserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#description AppUserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#enum AppUserSchemaProperty#enum}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#external_name AppUserSchemaProperty#external_name}

---

##### `externalNamespace`<sup>Optional</sup> <a name="externalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace"></a>

```typescript
public readonly externalNamespace: string;
```

- *Type:* string

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#external_namespace AppUserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#id AppUserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#master AppUserSchemaProperty#master}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#max_length AppUserSchemaProperty#max_length}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#min_length AppUserSchemaProperty#min_length}

---

##### `oneOf`<sup>Optional</sup> <a name="oneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf"></a>

```typescript
public readonly oneOf: IResolvable | AppUserSchemaPropertyOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>[]

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#one_of AppUserSchemaProperty#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#permissions AppUserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#required AppUserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#scope AppUserSchemaProperty#scope}.

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union"></a>

```typescript
public readonly union: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows to assign attribute's group priority.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#union AppUserSchemaProperty#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique"></a>

```typescript
public readonly unique: string;
```

- *Type:* string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#unique AppUserSchemaProperty#unique}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#user_type AppUserSchemaProperty#user_type}

---

### AppUserSchemaPropertyOneOf <a name="AppUserSchemaPropertyOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

const appUserSchemaPropertyOneOf: appUserSchemaProperty.AppUserSchemaPropertyOneOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const">const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title">title</a></code> | <code>string</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema_property#title AppUserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaPropertyArrayOneOfList <a name="AppUserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

new appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get"></a>

```typescript
public get(index: number): AppUserSchemaPropertyArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppUserSchemaPropertyArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>[]

---


### AppUserSchemaPropertyArrayOneOfOutputReference <a name="AppUserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

new appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput">constInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const">const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```typescript
public readonly constInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppUserSchemaPropertyArrayOneOf | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a> | cdktf.IResolvable

---


### AppUserSchemaPropertyOneOfList <a name="AppUserSchemaPropertyOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

new appUserSchemaProperty.AppUserSchemaPropertyOneOfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get"></a>

```typescript
public get(index: number): AppUserSchemaPropertyOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppUserSchemaPropertyOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>[]

---


### AppUserSchemaPropertyOneOfOutputReference <a name="AppUserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer"></a>

```typescript
import { appUserSchemaProperty } from '@cdktf/provider-okta'

new appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput">constInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const">const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```typescript
public readonly constInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppUserSchemaPropertyOneOf | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a> | cdktf.IResolvable

---


