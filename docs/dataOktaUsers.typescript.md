# `data_okta_users`

Refer to the Terraform Registory for docs: [`data_okta_users`](https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users).

# `dataOktaUsers` Submodule <a name="`dataOktaUsers` Submodule" id="@cdktf/provider-okta.dataOktaUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUsers <a name="DataOktaUsers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users okta_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

new dataOktaUsers.DataOktaUsers(scope: Construct, id: string, config?: DataOktaUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig">DataOktaUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig">DataOktaUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch">putSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetCompoundSearchOperator">resetCompoundSearchOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetDelayReadSeconds">resetDelayReadSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeGroups">resetIncludeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeRoles">resetIncludeRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSearch` <a name="putSearch" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch"></a>

```typescript
public putSearch(value: IResolvable | DataOktaUsersSearch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>[]

---

##### `resetCompoundSearchOperator` <a name="resetCompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetCompoundSearchOperator"></a>

```typescript
public resetCompoundSearchOperator(): void
```

##### `resetDelayReadSeconds` <a name="resetDelayReadSeconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetDelayReadSeconds"></a>

```typescript
public resetDelayReadSeconds(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeGroups` <a name="resetIncludeGroups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeGroups"></a>

```typescript
public resetIncludeGroups(): void
```

##### `resetIncludeRoles` <a name="resetIncludeRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeRoles"></a>

```typescript
public resetIncludeRoles(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetSearch"></a>

```typescript
public resetSearch(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

dataOktaUsers.DataOktaUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

dataOktaUsers.DataOktaUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

dataOktaUsers.DataOktaUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.search">search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList">DataOktaUsersSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList">DataOktaUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperatorInput">compoundSearchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSecondsInput">delayReadSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroupsInput">includeGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRolesInput">includeRolesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.searchInput">searchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperator">compoundSearchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSeconds">delayReadSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroups">includeGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRoles">includeRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.search"></a>

```typescript
public readonly search: DataOktaUsersSearchList;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList">DataOktaUsersSearchList</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.users"></a>

```typescript
public readonly users: DataOktaUsersUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList">DataOktaUsersUsersList</a>

---

##### `compoundSearchOperatorInput`<sup>Optional</sup> <a name="compoundSearchOperatorInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperatorInput"></a>

```typescript
public readonly compoundSearchOperatorInput: string;
```

- *Type:* string

---

##### `delayReadSecondsInput`<sup>Optional</sup> <a name="delayReadSecondsInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSecondsInput"></a>

```typescript
public readonly delayReadSecondsInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeGroupsInput`<sup>Optional</sup> <a name="includeGroupsInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroupsInput"></a>

```typescript
public readonly includeGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRolesInput`<sup>Optional</sup> <a name="includeRolesInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRolesInput"></a>

```typescript
public readonly includeRolesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.searchInput"></a>

```typescript
public readonly searchInput: IResolvable | DataOktaUsersSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>[]

---

##### `compoundSearchOperator`<sup>Required</sup> <a name="compoundSearchOperator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperator"></a>

```typescript
public readonly compoundSearchOperator: string;
```

- *Type:* string

---

##### `delayReadSeconds`<sup>Required</sup> <a name="delayReadSeconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSeconds"></a>

```typescript
public readonly delayReadSeconds: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeGroups`<sup>Required</sup> <a name="includeGroups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroups"></a>

```typescript
public readonly includeGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRoles`<sup>Required</sup> <a name="includeRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRoles"></a>

```typescript
public readonly includeRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUsersConfig <a name="DataOktaUsersConfig" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

const dataOktaUsersConfig: dataOktaUsers.DataOktaUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.compoundSearchOperator">compoundSearchOperator</a></code> | <code>string</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.delayReadSeconds">delayReadSeconds</a></code> | <code>string</code> | Force delay of the users read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.groupId">groupId</a></code> | <code>string</code> | Find users based on group membership using the id of the group. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#id DataOktaUsers#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeGroups">includeGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fetch group memberships for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeRoles">includeRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fetch user roles for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.search">search</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>[]</code> | search block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compoundSearchOperator`<sup>Optional</sup> <a name="compoundSearchOperator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.compoundSearchOperator"></a>

```typescript
public readonly compoundSearchOperator: string;
```

- *Type:* string

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#compound_search_operator DataOktaUsers#compound_search_operator}

---

##### `delayReadSeconds`<sup>Optional</sup> <a name="delayReadSeconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.delayReadSeconds"></a>

```typescript
public readonly delayReadSeconds: string;
```

- *Type:* string

Force delay of the users read by N seconds.

Useful when eventual consistency of users information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#delay_read_seconds DataOktaUsers#delay_read_seconds}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Find users based on group membership using the id of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#group_id DataOktaUsers#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#id DataOktaUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeGroups`<sup>Optional</sup> <a name="includeGroups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeGroups"></a>

```typescript
public readonly includeGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fetch group memberships for each user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#include_groups DataOktaUsers#include_groups}

---

##### `includeRoles`<sup>Optional</sup> <a name="includeRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeRoles"></a>

```typescript
public readonly includeRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fetch user roles for each user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#include_roles DataOktaUsers#include_roles}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.search"></a>

```typescript
public readonly search: IResolvable | DataOktaUsersSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>[]

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#search DataOktaUsers#search}

---

### DataOktaUsersSearch <a name="DataOktaUsersSearch" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

const dataOktaUsersSearch: dataOktaUsers.DataOktaUsersSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#comparison DataOktaUsers#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.expression">expression</a></code> | <code>string</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.name">name</a></code> | <code>string</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#value DataOktaUsers#value}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#comparison DataOktaUsers#comparison}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#expression DataOktaUsers#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#name DataOktaUsers#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/users#value DataOktaUsers#value}.

---

### DataOktaUsersUsers <a name="DataOktaUsersUsers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

const dataOktaUsersUsers: dataOktaUsers.DataOktaUsersUsers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaUsersSearchList <a name="DataOktaUsersSearchList" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

new dataOktaUsers.DataOktaUsersSearchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get"></a>

```typescript
public get(index: number): DataOktaUsersSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaUsersSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>[]

---


### DataOktaUsersSearchOutputReference <a name="DataOktaUsersSearchOutputReference" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

new dataOktaUsers.DataOktaUsersSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaUsersSearch | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a> | cdktf.IResolvable

---


### DataOktaUsersUsersList <a name="DataOktaUsersUsersList" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

new dataOktaUsers.DataOktaUsersUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get"></a>

```typescript
public get(index: number): DataOktaUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOktaUsersUsersOutputReference <a name="DataOktaUsersUsersOutputReference" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer"></a>

```typescript
import { dataOktaUsers } from '@cdktf/provider-okta'

new dataOktaUsers.DataOktaUsersUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.adminRoles">adminRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.costCenter">costCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.customProfileAttributes">customProfileAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.groupMemberships">groupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.manager">manager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.managerId">managerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.nickName">nickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.postalAddress">postalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.primaryPhone">primaryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.secondEmail">secondEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers">DataOktaUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminRoles`<sup>Required</sup> <a name="adminRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.adminRoles"></a>

```typescript
public readonly adminRoles: string[];
```

- *Type:* string[]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `customProfileAttributes`<sup>Required</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.customProfileAttributes"></a>

```typescript
public readonly customProfileAttributes: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `groupMemberships`<sup>Required</sup> <a name="groupMemberships" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.groupMemberships"></a>

```typescript
public readonly groupMemberships: string[];
```

- *Type:* string[]

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.manager"></a>

```typescript
public readonly manager: string;
```

- *Type:* string

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.managerId"></a>

```typescript
public readonly managerId: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.nickName"></a>

```typescript
public readonly nickName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.postalAddress"></a>

```typescript
public readonly postalAddress: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `primaryPhone`<sup>Required</sup> <a name="primaryPhone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.primaryPhone"></a>

```typescript
public readonly primaryPhone: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `secondEmail`<sup>Required</sup> <a name="secondEmail" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.secondEmail"></a>

```typescript
public readonly secondEmail: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaUsersUsers;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers">DataOktaUsersUsers</a>

---



