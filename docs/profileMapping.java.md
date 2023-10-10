# `okta_profile_mapping`

Refer to the Terraform Registory for docs: [`okta_profile_mapping`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping).

# `profileMapping` Submodule <a name="`profileMapping` Submodule" id="@cdktf/provider-okta.profileMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProfileMapping <a name="ProfileMapping" id="@cdktf/provider-okta.profileMapping.ProfileMapping"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping okta_profile_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMapping;

ProfileMapping.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .sourceId(java.lang.String)
    .targetId(java.lang.String)
//  .alwaysApply(java.lang.Boolean)
//  .alwaysApply(IResolvable)
//  .deleteWhenAbsent(java.lang.Boolean)
//  .deleteWhenAbsent(IResolvable)
//  .id(java.lang.String)
//  .mappings(IResolvable)
//  .mappings(java.util.List<ProfileMappingMappings>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.sourceId">sourceId</a></code> | <code>java.lang.String</code> | The source id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | The target id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.alwaysApply">alwaysApply</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether apply the changes to all users with this profile after updating or creating the these mappings. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.deleteWhenAbsent">deleteWhenAbsent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#id ProfileMapping#id}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.mappings">mappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>></code> | mappings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.sourceId"></a>

- *Type:* java.lang.String

The source id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#source_id ProfileMapping#source_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

The target id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#target_id ProfileMapping#target_id}

---

##### `alwaysApply`<sup>Optional</sup> <a name="alwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.alwaysApply"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether apply the changes to all users with this profile after updating or creating the these mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#always_apply ProfileMapping#always_apply}

---

##### `deleteWhenAbsent`<sup>Optional</sup> <a name="deleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.deleteWhenAbsent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When turned on this flag will trigger the provider to delete mapping properties that are not defined in config.

By default, we do not delete missing properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#id ProfileMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.mappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>>

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#mappings ProfileMapping#mappings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings">putMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply">resetAlwaysApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent">resetDeleteWhenAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings">resetMappings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMappings` <a name="putMappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings"></a>

```java
public void putMappings(IResolvable OR java.util.List<ProfileMappingMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>>

---

##### `resetAlwaysApply` <a name="resetAlwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply"></a>

```java
public void resetAlwaysApply()
```

##### `resetDeleteWhenAbsent` <a name="resetDeleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent"></a>

```java
public void resetDeleteWhenAbsent()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetId"></a>

```java
public void resetId()
```

##### `resetMappings` <a name="resetMappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings"></a>

```java
public void resetMappings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMapping;

ProfileMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMapping;

ProfileMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMapping;

ProfileMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings">mappings</a></code> | <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput">alwaysApplyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput">deleteWhenAbsentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput">mappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply">alwaysApply</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent">deleteWhenAbsent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings"></a>

```java
public ProfileMappingMappingsList getMappings();
```

- *Type:* <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `alwaysApplyInput`<sup>Optional</sup> <a name="alwaysApplyInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput"></a>

```java
public java.lang.Object getAlwaysApplyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteWhenAbsentInput`<sup>Optional</sup> <a name="deleteWhenAbsentInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput"></a>

```java
public java.lang.Object getDeleteWhenAbsentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput"></a>

```java
public java.lang.Object getMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>>

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput"></a>

```java
public java.lang.String getSourceIdInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `alwaysApply`<sup>Required</sup> <a name="alwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply"></a>

```java
public java.lang.Object getAlwaysApply();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteWhenAbsent`<sup>Required</sup> <a name="deleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent"></a>

```java
public java.lang.Object getDeleteWhenAbsent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProfileMappingConfig <a name="ProfileMappingConfig" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMappingConfig;

ProfileMappingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .sourceId(java.lang.String)
    .targetId(java.lang.String)
//  .alwaysApply(java.lang.Boolean)
//  .alwaysApply(IResolvable)
//  .deleteWhenAbsent(java.lang.Boolean)
//  .deleteWhenAbsent(IResolvable)
//  .id(java.lang.String)
//  .mappings(IResolvable)
//  .mappings(java.util.List<ProfileMappingMappings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | The source id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | The target id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply">alwaysApply</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether apply the changes to all users with this profile after updating or creating the these mappings. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent">deleteWhenAbsent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#id ProfileMapping#id}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings">mappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>></code> | mappings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

The source id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#source_id ProfileMapping#source_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

The target id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#target_id ProfileMapping#target_id}

---

##### `alwaysApply`<sup>Optional</sup> <a name="alwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply"></a>

```java
public java.lang.Object getAlwaysApply();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether apply the changes to all users with this profile after updating or creating the these mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#always_apply ProfileMapping#always_apply}

---

##### `deleteWhenAbsent`<sup>Optional</sup> <a name="deleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent"></a>

```java
public java.lang.Object getDeleteWhenAbsent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When turned on this flag will trigger the provider to delete mapping properties that are not defined in config.

By default, we do not delete missing properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#id ProfileMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings"></a>

```java
public java.lang.Object getMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>>

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#mappings ProfileMapping#mappings}

---

### ProfileMappingMappings <a name="ProfileMappingMappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMappingMappings;

ProfileMappingMappings.builder()
    .expression(java.lang.String)
    .id(java.lang.String)
//  .pushStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#expression ProfileMapping#expression}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id">id</a></code> | <code>java.lang.String</code> | The mapping property key. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus">pushStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#push_status ProfileMapping#push_status}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#expression ProfileMapping#expression}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The mapping property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#id ProfileMapping#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pushStatus`<sup>Optional</sup> <a name="pushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus"></a>

```java
public java.lang.String getPushStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/profile_mapping#push_status ProfileMapping#push_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProfileMappingMappingsList <a name="ProfileMappingMappingsList" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMappingMappingsList;

new ProfileMappingMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get"></a>

```java
public ProfileMappingMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>>

---


### ProfileMappingMappingsOutputReference <a name="ProfileMappingMappingsOutputReference" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.profile_mapping.ProfileMappingMappingsOutputReference;

new ProfileMappingMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus">resetPushStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPushStatus` <a name="resetPushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus"></a>

```java
public void resetPushStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput">pushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus">pushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pushStatusInput`<sup>Optional</sup> <a name="pushStatusInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput"></a>

```java
public java.lang.String getPushStatusInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pushStatus`<sup>Required</sup> <a name="pushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus"></a>

```java
public java.lang.String getPushStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>

---



