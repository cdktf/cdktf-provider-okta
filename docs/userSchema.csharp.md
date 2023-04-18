# `okta_user_schema`

Refer to the Terraform Registory for docs: [`okta_user_schema`](https://www.terraform.io/docs/providers/okta/r/user_schema).

# `userSchema` Submodule <a name="`userSchema` Submodule" id="@cdktf/provider-okta.userSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSchema <a name="UserSchema" id="@cdktf/provider-okta.userSchema.UserSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_schema okta_user_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchema(Construct Scope, string Id, UserSchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig">UserSchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig">UserSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf">PutArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority">PutMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putOneOf">PutOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayEnum">ResetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayOneOf">ResetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayType">ResetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetExternalNamespace">ResetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMasterOverridePriority">ResetMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetOneOf">ResetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetUnique">ResetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.userSchema.UserSchema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.userSchema.UserSchema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.userSchema.UserSchema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutArrayOneOf` <a name="PutArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf"></a>

```csharp
private void PutArrayOneOf(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf.parameter.value"></a>

- *Type:* object

---

##### `PutMasterOverridePriority` <a name="PutMasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority"></a>

```csharp
private void PutMasterOverridePriority(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority.parameter.value"></a>

- *Type:* object

---

##### `PutOneOf` <a name="PutOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.putOneOf"></a>

```csharp
private void PutOneOf(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchema.putOneOf.parameter.value"></a>

- *Type:* object

---

##### `ResetArrayEnum` <a name="ResetArrayEnum" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayEnum"></a>

```csharp
private void ResetArrayEnum()
```

##### `ResetArrayOneOf` <a name="ResetArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayOneOf"></a>

```csharp
private void ResetArrayOneOf()
```

##### `ResetArrayType` <a name="ResetArrayType" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayType"></a>

```csharp
private void ResetArrayType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.userSchema.UserSchema.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-okta.userSchema.UserSchema.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-okta.userSchema.UserSchema.resetExternalName"></a>

```csharp
private void ResetExternalName()
```

##### `ResetExternalNamespace` <a name="ResetExternalNamespace" id="@cdktf/provider-okta.userSchema.UserSchema.resetExternalNamespace"></a>

```csharp
private void ResetExternalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.userSchema.UserSchema.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.userSchema.UserSchema.resetMaster"></a>

```csharp
private void ResetMaster()
```

##### `ResetMasterOverridePriority` <a name="ResetMasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchema.resetMasterOverridePriority"></a>

```csharp
private void ResetMasterOverridePriority()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-okta.userSchema.UserSchema.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-okta.userSchema.UserSchema.resetMinLength"></a>

```csharp
private void ResetMinLength()
```

##### `ResetOneOf` <a name="ResetOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.resetOneOf"></a>

```csharp
private void ResetOneOf()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-okta.userSchema.UserSchema.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.userSchema.UserSchema.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.userSchema.UserSchema.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-okta.userSchema.UserSchema.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-okta.userSchema.UserSchema.resetUnique"></a>

```csharp
private void ResetUnique()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.userSchema.UserSchema.resetUserType"></a>

```csharp
private void ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.userSchema.UserSchema.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

UserSchema.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.userSchema.UserSchema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

UserSchema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

UserSchema.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOf">ArrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList">UserSchemaArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriority">MasterOverridePriority</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList">UserSchemaMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.oneOf">OneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList">UserSchemaOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnumInput">ArrayEnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOfInput">ArrayOneOfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayTypeInput">ArrayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.enumInput">EnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNameInput">ExternalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespaceInput">ExternalNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterInput">MasterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriorityInput">MasterOverridePriorityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.oneOfInput">OneOfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.uniqueInput">UniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.userTypeInput">UserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnum">ArrayEnum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayType">ArrayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.enum">Enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalName">ExternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespace">ExternalNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.master">Master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.unique">Unique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.userType">UserType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.userSchema.UserSchema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.userSchema.UserSchema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.userSchema.UserSchema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userSchema.UserSchema.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userSchema.UserSchema.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userSchema.UserSchema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userSchema.UserSchema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userSchema.UserSchema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userSchema.UserSchema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userSchema.UserSchema.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArrayOneOf`<sup>Required</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOf"></a>

```csharp
public UserSchemaArrayOneOfList ArrayOneOf { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList">UserSchemaArrayOneOfList</a>

---

##### `MasterOverridePriority`<sup>Required</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriority"></a>

```csharp
public UserSchemaMasterOverridePriorityList MasterOverridePriority { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList">UserSchemaMasterOverridePriorityList</a>

---

##### `OneOf`<sup>Required</sup> <a name="OneOf" id="@cdktf/provider-okta.userSchema.UserSchema.property.oneOf"></a>

```csharp
public UserSchemaOneOfList OneOf { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList">UserSchemaOneOfList</a>

---

##### `ArrayEnumInput`<sup>Optional</sup> <a name="ArrayEnumInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnumInput"></a>

```csharp
public string[] ArrayEnumInput { get; }
```

- *Type:* string[]

---

##### `ArrayOneOfInput`<sup>Optional</sup> <a name="ArrayOneOfInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOfInput"></a>

```csharp
public object ArrayOneOfInput { get; }
```

- *Type:* object

---

##### `ArrayTypeInput`<sup>Optional</sup> <a name="ArrayTypeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayTypeInput"></a>

```csharp
public string ArrayTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.enumInput"></a>

```csharp
public string[] EnumInput { get; }
```

- *Type:* string[]

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNameInput"></a>

```csharp
public string ExternalNameInput { get; }
```

- *Type:* string

---

##### `ExternalNamespaceInput`<sup>Optional</sup> <a name="ExternalNamespaceInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespaceInput"></a>

```csharp
public string ExternalNamespaceInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterInput"></a>

```csharp
public string MasterInput { get; }
```

- *Type:* string

---

##### `MasterOverridePriorityInput`<sup>Optional</sup> <a name="MasterOverridePriorityInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriorityInput"></a>

```csharp
public object MasterOverridePriorityInput { get; }
```

- *Type:* object

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `OneOfInput`<sup>Optional</sup> <a name="OneOfInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.oneOfInput"></a>

```csharp
public object OneOfInput { get; }
```

- *Type:* object

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.uniqueInput"></a>

```csharp
public string UniqueInput { get; }
```

- *Type:* string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.userTypeInput"></a>

```csharp
public string UserTypeInput { get; }
```

- *Type:* string

---

##### `ArrayEnum`<sup>Required</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnum"></a>

```csharp
public string[] ArrayEnum { get; }
```

- *Type:* string[]

---

##### `ArrayType`<sup>Required</sup> <a name="ArrayType" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayType"></a>

```csharp
public string ArrayType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.userSchema.UserSchema.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-okta.userSchema.UserSchema.property.enum"></a>

```csharp
public string[] Enum { get; }
```

- *Type:* string[]

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalName"></a>

```csharp
public string ExternalName { get; }
```

- *Type:* string

---

##### `ExternalNamespace`<sup>Required</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespace"></a>

```csharp
public string ExternalNamespace { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.userSchema.UserSchema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchema.UserSchema.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.userSchema.UserSchema.property.master"></a>

```csharp
public string Master { get; }
```

- *Type:* string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-okta.userSchema.UserSchema.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-okta.userSchema.UserSchema.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-okta.userSchema.UserSchema.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.userSchema.UserSchema.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.userSchema.UserSchema.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.userSchema.UserSchema.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchema.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchema.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-okta.userSchema.UserSchema.property.unique"></a>

```csharp
public string Unique { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.userSchema.UserSchema.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.userSchema.UserSchema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserSchemaArrayOneOf <a name="UserSchemaArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaArrayOneOf {
    string Const,
    string Title
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.const">Const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.title">Title</a></code> | <code>string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.const"></a>

```csharp
public string Const { get; set; }
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#const UserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

### UserSchemaConfig <a name="UserSchemaConfig" id="@cdktf/provider-okta.userSchema.UserSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Index,
    string Title,
    string Type,
    string[] ArrayEnum = null,
    object ArrayOneOf = null,
    string ArrayType = null,
    string Description = null,
    string[] Enum = null,
    string ExternalName = null,
    string ExternalNamespace = null,
    string Id = null,
    string Master = null,
    object MasterOverridePriority = null,
    double MaxLength = null,
    double MinLength = null,
    object OneOf = null,
    string Pattern = null,
    string Permissions = null,
    object Required = null,
    string Scope = null,
    string Unique = null,
    string UserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.index">Index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.title">Title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.type">Type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayEnum">ArrayEnum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayOneOf">ArrayOneOf</a></code> | <code>object</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayType">ArrayType</a></code> | <code>string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.description">Description</a></code> | <code>string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.enum">Enum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalName">ExternalName</a></code> | <code>string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalNamespace">ExternalNamespace</a></code> | <code>string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.master">Master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.masterOverridePriority">MasterOverridePriority</a></code> | <code>object</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.maxLength">MaxLength</a></code> | <code>double</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.minLength">MinLength</a></code> | <code>double</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.oneOf">OneOf</a></code> | <code>object</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.pattern">Pattern</a></code> | <code>string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.permissions">Permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.required">Required</a></code> | <code>object</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.unique">Unique</a></code> | <code>string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.userType">UserType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#index UserSchema#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}

---

##### `ArrayEnum`<sup>Optional</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayEnum"></a>

```csharp
public string[] ArrayEnum { get; set; }
```

- *Type:* string[]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_enum UserSchema#array_enum}

---

##### `ArrayOneOf`<sup>Optional</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayOneOf"></a>

```csharp
public object ArrayOneOf { get; set; }
```

- *Type:* object

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_one_of UserSchema#array_one_of}

---

##### `ArrayType`<sup>Optional</sup> <a name="ArrayType" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayType"></a>

```csharp
public string ArrayType { get; set; }
```

- *Type:* string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_type UserSchema#array_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#description UserSchema#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.enum"></a>

```csharp
public string[] Enum { get; set; }
```

- *Type:* string[]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#enum UserSchema#enum}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalName"></a>

```csharp
public string ExternalName { get; set; }
```

- *Type:* string

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_name UserSchema#external_name}

---

##### `ExternalNamespace`<sup>Optional</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalNamespace"></a>

```csharp
public string ExternalNamespace { get; set; }
```

- *Type:* string

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_namespace UserSchema#external_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.master"></a>

```csharp
public string Master { get; set; }
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master UserSchema#master}

---

##### `MasterOverridePriority`<sup>Optional</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.masterOverridePriority"></a>

```csharp
public object MasterOverridePriority { get; set; }
```

- *Type:* object

master_override_priority block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master_override_priority UserSchema#master_override_priority}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#max_length UserSchema#max_length}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#min_length UserSchema#min_length}

---

##### `OneOf`<sup>Optional</sup> <a name="OneOf" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.oneOf"></a>

```csharp
public object OneOf { get; set; }
```

- *Type:* object

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#one_of UserSchema#one_of}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#pattern UserSchema#pattern}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#permissions UserSchema#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#required UserSchema#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}.

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.unique"></a>

```csharp
public string Unique { get; set; }
```

- *Type:* string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#unique UserSchema#unique}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.userType"></a>

```csharp
public string UserType { get; set; }
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#user_type UserSchema#user_type}

---

### UserSchemaMasterOverridePriority <a name="UserSchemaMasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaMasterOverridePriority {
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#value UserSchema#value}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#value UserSchema#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}.

---

### UserSchemaOneOf <a name="UserSchemaOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaOneOf {
    string Const,
    string Title
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.const">Const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.title">Title</a></code> | <code>string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.const"></a>

```csharp
public string Const { get; set; }
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#const UserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

## Classes <a name="Classes" id="Classes"></a>

### UserSchemaArrayOneOfList <a name="UserSchemaArrayOneOfList" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaArrayOneOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get"></a>

```csharp
private UserSchemaArrayOneOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserSchemaArrayOneOfOutputReference <a name="UserSchemaArrayOneOfOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaArrayOneOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.const">Const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.constInput"></a>

```csharp
public string ConstInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.const"></a>

```csharp
public string Const { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserSchemaMasterOverridePriorityList <a name="UserSchemaMasterOverridePriorityList" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaMasterOverridePriorityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get"></a>

```csharp
private UserSchemaMasterOverridePriorityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserSchemaMasterOverridePriorityOutputReference <a name="UserSchemaMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaMasterOverridePriorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserSchemaOneOfList <a name="UserSchemaOneOfList" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaOneOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get"></a>

```csharp
private UserSchemaOneOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserSchemaOneOfOutputReference <a name="UserSchemaOneOfOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserSchemaOneOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.const">Const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.constInput"></a>

```csharp
public string ConstInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.const"></a>

```csharp
public string Const { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



